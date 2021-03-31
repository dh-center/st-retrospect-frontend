import { ReactElement } from 'react';
import { useLazyLoadQuery, usePaginationFragment } from 'react-relay';
import { RoutesListPaginationQuery } from './__generated__/RoutesListPaginationQuery.graphql';
import { RoutesList_questsConnection$key } from './__generated__/RoutesList_questsConnection.graphql';
import graphql from 'babel-plugin-relay/macro';
import { RoutesListQuery } from './__generated__/RoutesListQuery.graphql';
import styled from 'styled-components';
import RouteCard from './RouteCard';

/**
 * Default count of loading routes in list
 */
const ROUTES_ON_PAGE = 10;

const ListWrapper = styled.div`
  margin: 0 -16px;
  padding: 12px 4px 12px 16px;

  overflow-y: auto;
`;

/**
 * List of all routes
 */
export default function RoutesList(): ReactElement {
  const routesQueryData = useLazyLoadQuery<RoutesListQuery>(
    graphql`
      query RoutesListQuery(
        $count: Int,
        $after: Cursor,
      ) {
        ...RoutesList_questsConnection @arguments(count: $count, after: $after)
      }
    `,
    {
      count: ROUTES_ON_PAGE,
    }
  );

  const { data, loadNext } = usePaginationFragment<RoutesListPaginationQuery, RoutesList_questsConnection$key>(graphql`
    fragment RoutesList_questsConnection on Query
    @argumentDefinitions(
      count: { type: "Int", defaultValue: 10 }
      after: { type: "Cursor" }
    )
    @refetchable(queryName: "RoutesListPaginationQuery") {
      quests(first: $count, after: $after)
      @connection(key: "RoutesList_questsConnection_quests") {
        edges {
          node {
            ...RouteCard_quest
          }
        }
      }
    }
  `, routesQueryData);

  return (
    <ListWrapper>
      {
        data.quests.edges.map(
          (edge, index) => {
            return <RouteCard key={index} route={edge.node}/>;
          }
        )
      }
      <button onClick={() => loadNext(ROUTES_ON_PAGE)}>Load next</button>
    </ListWrapper>
  );
}
