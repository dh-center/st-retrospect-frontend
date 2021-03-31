import { ReactElement } from 'react';
import { useLazyLoadQuery, usePaginationFragment } from 'react-relay';
import { RoutesListPaginationQuery } from './__generated__/RoutesListPaginationQuery.graphql';
import { RoutesList_questsConnection$key } from './__generated__/RoutesList_questsConnection.graphql';
import graphql from 'babel-plugin-relay/macro';
import { RoutesListQuery } from './__generated__/RoutesListQuery.graphql';
import styled from 'styled-components';

const ROUTES_ON_PAGE = 10;

const ListWrapper = styled.div`
  overflow-y: scroll;
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
      count: { type: "Int", defaultValue: 1 }
      after: { type: "Cursor" }
    )
    @refetchable(queryName: "RoutesListPaginationQuery") {
      quests(first: $count, after: $after)
      @connection(key: "RoutesList_questsConnection_quests") {
        edges {
          node {
            name
          }
        }
      }
    }
  `, routesQueryData);

  return (
    <ListWrapper>
      {data.quests.edges.map((edge, index) => <div key={index}>{edge.node.name}</div>)}
      <button onClick={() => loadNext(ROUTES_ON_PAGE)}>Load next</button>
    </ListWrapper>
  );
}
