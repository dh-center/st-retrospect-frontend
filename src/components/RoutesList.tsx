import { ReactElement } from 'react';
import { useLazyLoadQuery, usePaginationFragment } from 'react-relay';
import { RoutesListPaginationQuery } from './__generated__/RoutesListPaginationQuery.graphql';
import { RoutesList_questsConnection$key } from './__generated__/RoutesList_questsConnection.graphql';
import graphql from 'babel-plugin-relay/macro';
import { RoutesListQuery } from './__generated__/RoutesListQuery.graphql';
import styled from 'styled-components';
import { sansSerifLight } from '../styles/FontStyles';
import { useTranslation } from 'react-i18next';

const ROUTES_ON_PAGE = 10;

const ListWrapper = styled.div`
  margin: 0 -16px;
  padding: 12px 4px 12px 16px;

  overflow-y: auto;
`;

const RouteCard = styled.div`
  display: flex;
  margin-bottom: 12px;

  border: .5px solid #F2F2F2;
  border-radius: 2px;
  overflow: hidden;
`;

interface RouteCardImageProps {
  src: string;
}

const RouteCardImage = styled.div<RouteCardImageProps>`
  min-width: 60px;
  min-height: 100%;

  background-image: url("${ props => props.src }");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const RouteCardInformation = styled.div`
  padding: 18px 12px;

  font-size: 16px;
`;

const RouteCardDelimiter = styled.div`
  width: 60px;
  height: 1px;
  margin: 12px 0;

  background: var(--color-blue);
`;

const RouteCardAuthor = styled.span`
  ${ sansSerifLight };
  font-size: 14px;
`;

/**
 * List of all routes
 */
export default function RoutesList(): ReactElement {
  const { t } = useTranslation();

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
            photo
          }
        }
      }
    }
  `, routesQueryData);

  return (
    <ListWrapper>
      {data.quests.edges.map((edge, index) => <RouteCard key={index}>
        <RouteCardImage src={edge.node.photo ? edge.node.photo : 'https://picsum.photos/seed/picsum/100/200'}/>
        <RouteCardInformation>
          {edge.node.name}
          <RouteCardDelimiter/>
          <RouteCardAuthor>
            { t('author') }: ИТМО
          </RouteCardAuthor>
        </RouteCardInformation>
      </RouteCard>)}
      <button onClick={() => loadNext(ROUTES_ON_PAGE)}>Load next</button>
    </ListWrapper>
  );
}
