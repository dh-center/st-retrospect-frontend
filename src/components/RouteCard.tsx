import { ReactElement } from 'react';
import { useParams, Redirect, Link } from 'react-router-dom';
import { useLazyLoadQuery } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { RouteCardQuery } from './__generated__/RouteCardQuery.graphql';
import styled from 'styled-components';
import { sansSerifLight } from '../styles/FontStyles';
import { useTranslation } from 'react-i18next';
import {
  CardWrapper,
  GoingBackButton,
  Image,
  InformationWrapper,
  Name,
  Description
} from './cards';

/**
 * Parameters of '/route' route
 */
interface RouteRouteParameters {
  /**
   * Id of current route
   */
  questId: string;
}

const Author = styled.div`
  ${ sansSerifLight };
  font-size: 14px;

  margin-bottom: 24px;
`;

const CenterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StartRouteButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 221px;
  height: 36px;

  background: var(--color-blue);
  outline: none;
  border: none;
  border-radius: 2px;
  cursor: pointer;

  font-size: 14px;
  color: var(--color-white);
  text-decoration: none;
`;

/**
 * Route card with information about the route
 */
export default function RouteCard(): ReactElement {
  const { t } = useTranslation();
  const { questId } = useParams<RouteRouteParameters>();
  const data = useLazyLoadQuery<RouteCardQuery>(
    graphql`
      query RouteCardQuery($id: GlobalId!) {
        quest(id: $id) {
          name
          description
          photo
        }
      }
    `,
    {
      id: questId,
    }
  );

  if (!data.quest) {
    return (
      <Redirect to="/routes"/>
    );
  }

  return (
    <CardWrapper>
      <GoingBackButton to="/routes"/>
      <Image src={data.quest.photo ? data.quest.photo : 'https://picsum.photos/seed/picsum/200/100'}/>
      <InformationWrapper>
        <Name>{ data.quest.name }</Name>
        <Author>{ t('author') }: ИТМО</Author>
        <Description>{ data.quest.description }</Description>
        <CenterWrapper>
          <StartRouteButton to={`/route/${questId}/0`}>{ t('route.startRoute') }</StartRouteButton>
        </CenterWrapper>
      </InformationWrapper>
    </CardWrapper>
  );
}
