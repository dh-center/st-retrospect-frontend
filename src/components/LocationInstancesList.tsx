import { ReactElement, useEffect } from 'react';
import LocationInstanceItem from './LocationInstanceItem';
import { ListWrapper } from './lists';
import { useLazyLoadQuery } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { LocationInstancesListQuery, SearchInput } from './__generated__/LocationInstancesListQuery.graphql';
import useQuery from '../lib/useQuery';
import useCurrentMapContent from '../contexts/CurrentMapContentContext';

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
  };

  const data = useLazyLoadQuery<LocationInstancesListQuery>(
    graphql`
      query LocationInstancesListQuery(
        $input: SearchInput!
      ) {
        locationInstancesSearch(input: $input) {
          edges {
            node {
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

  useEffect(() => {
    if (!data.locationInstancesSearch) {
      return;
    }

    setCurrentLocations(data.locationInstancesSearch.edges.map(edge => edge.node));
  }, [ data.locationInstancesSearch.edges ]);

  return (
    <ListWrapper hasNext={false}>
      {
        data.locationInstancesSearch.edges.map((edge, index) => <LocationInstanceItem key={index} locationInstance={edge.node}/>)
      }
    </ListWrapper>
  );
}
