import { ReactElement, useEffect, useMemo } from 'react';
import LocationInstanceItem from './LocationInstanceItem';
import { ListWrapper } from './lists';
import { useLazyLoadQuery } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { SearchResultListQuery, SearchInput } from './__generated__/SearchResultListQuery.graphql';
import useQuery from '../lib/useQuery';
import useCurrentMapContent from '../contexts/CurrentMapContentContext';
import uniqueObjectsByIds from '../lib/uniqueObjectsByIds';
import PersonItem from './PersonItem';

/**
 * List of persons and location instances
 */
export default function SearchResultList(): ReactElement {
  const query = useQuery();
  const { setCurrentLocations } = useCurrentMapContent();

  const input: SearchInput = {
    query: query.get('query') || '',
    startYear: Number.parseInt(query.get('startYear') || '1500'),
    endYear: Number.parseInt(query.get('endYear') || '2021'),
    category: (query.get('categories') || '').split(','),
    first: 30,
    skip: 0,
  };

  const data = useLazyLoadQuery<SearchResultListQuery>(
    graphql`
      query SearchResultListQuery(
        $input: SearchInput!
      ) {
        relationsByPersonSearch(input: $input) {
          nodes {
            locationInstance {
              id
              ...LocationInstanceItem_locationInstance
              ...LocationInstanceRelationsPopup_data
            }
            person {
              id
              ...PersonItem_person
            }
          }
        }
      }
    `,
    {
      input,
    }
  );

  const uniqueLocationInstances = useMemo(
    () => uniqueObjectsByIds(data.relationsByPersonSearch.nodes.map(node => node.locationInstance)),
    [ data.relationsByPersonSearch.nodes ]
  );
  const uniquePersons = useMemo(
    () => uniqueObjectsByIds(data.relationsByPersonSearch.nodes.map(node => node.person)),
    [ data.relationsByPersonSearch.nodes ]
  );

  useEffect(() => {
    if (!uniqueLocationInstances) {
      return;
    }

    setCurrentLocations(uniqueLocationInstances);
  }, [ uniqueLocationInstances ]);

  return (
    <ListWrapper hasNext={false}>
      {
        /**
         * Displays maximum 3 first persons
         */
        uniquePersons.slice(0, 3).map((item) => <PersonItem key={item.id} person={item}/>)
      }
      {
        uniqueLocationInstances.map((item) => <LocationInstanceItem key={item.id} locationInstance={item}/>)
      }
    </ListWrapper>
  );
}
