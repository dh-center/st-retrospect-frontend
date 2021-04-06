import { ReactElement } from 'react';
import { useLazyLoadQuery, usePaginationFragment } from 'react-relay';
import { RoutesListPaginationQuery } from './__generated__/RoutesListPaginationQuery.graphql';
import { RoutesList_questsConnection$key } from './__generated__/RoutesList_questsConnection.graphql';
import graphql from 'babel-plugin-relay/macro';
import { RoutesListQuery } from './__generated__/RoutesListQuery.graphql';
import styled from 'styled-components';
import RouteItem from './RouteItem';
import LoadMoreButton from './LoadMoreButton';

/**
 * Default count of loading routes in list
 */
const ROUTES_ON_PAGE = 10;

/**
 * Props of list wrapper
 */
interface ListWrapperProps {
  /**
   * Has list next items for load
   * It needs for displaying padding if it isn't next items and LoadMoreButton is hiding
   */
  hasNext: boolean;
}

const ListWrapper = styled.div<ListWrapperProps>`
  margin: 0 -16px;
  padding: 12px 4px ${ props => props.hasNext ? 0 : '12px' } 16px;

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

  const { data, loadNext, isLoadingNext, hasNext } = usePaginationFragment<RoutesListPaginationQuery, RoutesList_questsConnection$key>(graphql`
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
            ...RouteItem_quest
          }
        }
      }
    }
  `, routesQueryData);

  return (
    <ListWrapper hasNext={hasNext}>
      {
        data.quests.edges.map(
          (edge, index) => {
            return <RouteItem key={index} route={edge.node}/>;
          }
        )
      }
      { hasNext && <LoadMoreButton isLoadingNext={isLoadingNext} onClick={() => loadNext(ROUTES_ON_PAGE)}/> }
    </ListWrapper>
  );
}
