import { ReactElement, useEffect } from 'react';
import LocationInstanceItem from './LocationInstanceItem';
import { ListWrapper } from './lists';
import { useLazyLoadQuery } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { LocationInstancesListQuery, SearchInput } from './__generated__/LocationInstancesListQuery.graphql';
import useQuery from '../lib/useQuery';
import useCurrentMapContent from '../contexts/CurrentMapContentContext';
import uniqueObjectsByIds from '../lib/uniqueObjectsByIds';

/**
 * List of location instances
 */
export default function LocationInstancesList(): ReactElement {
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

  const data = useLazyLoadQuery<LocationInstancesListQuery>(
    graphql`
      query LocationInstancesListQuery(
        $input: SearchInput!
      ) {
        relationsByPersonSearch(input: $input) {
          nodes {
            locationInstance {
              id
              ...LocationInstanceItem_locationInstance
              ...LocationInstanceRelationsPopup_data
            }
          }
        }
      }
    `,
    {
      input,
    }
  );

  const uniqueLocationInstances = uniqueObjectsByIds(data.relationsByPersonSearch.nodes.map(node => node.locationInstance));

  useEffect(() => {
    if (!uniqueLocationInstances) {
      return;
    }

    setCurrentLocations(uniqueLocationInstances);
  }, [ uniqueLocationInstances ]);

  return (
    <ListWrapper hasNext={false}>
      {
        uniqueLocationInstances.map((item, index) => <LocationInstanceItem key={index} locationInstance={item}/>)
      }
    </ListWrapper>
  );
}
