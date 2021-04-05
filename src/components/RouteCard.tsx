import { ReactElement } from 'react';
import { useParams, Redirect, Link } from 'react-router-dom';
import { useLazyLoadQuery } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { RouteCardQuery } from './__generated__/RouteCardQuery.graphql';
import styled from 'styled-components';
import { sansSerifLight } from '../styles/FontStyles';
import { useTranslation } from 'react-i18next';
import LeftArrowIcon from '../assets/arrow-left-second.svg';

/**
 * Parameters of '/route' route
 */
interface RouteRouteParameters {
  /**
   * Id of current route
   */
  id: string;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;

  margin: 0 -16px;
  overflow-y: hidden;
`;

const GoingBackButton = styled(Link)`
  position: absolute;
  top: 6px;
  left: 16px;

  width: 24px;
  height: 24px;

  background: var(--color-white);
  background-image: url("${ LeftArrowIcon }");
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 2px;
  box-shadow: (--shadow-base);
`;

/**
 * Props of image block in route card
 */
interface ImageProps {
  /**
   * Source of image
   */
  src: string;
}

const Image = styled.div<ImageProps>`
  min-width: 100%;
  min-height: 144px;

  background-image: url("${ props => props.src }");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const InformationWrapper = styled.div`
  padding: 16px 16px 24px;

  overflow-y: auto;
`;

const Name = styled.div`
  font-size: 16px;

  margin-bottom: 12px;
`;

const Author = styled.div`
  ${ sansSerifLight };
  font-size: 14px;

  margin-bottom: 24px;
`;

const Description = styled.div`
  ${ sansSerifLight };
  font-size: 16px;

  margin-bottom: 24px;
`;

const CenterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StartRouteButton = styled.button`
  width: 221px;
  height: 36px;

  background: var(--color-blue);
  outline: none;
  border: none;
  border-radius: 2px;
  cursor: pointer;

  font-size: 14px;
  color: var(--color-white);
`;

/**
 * Route card with information about the route
 */
export default function RouteCard(): ReactElement {
  const { t } = useTranslation();
  const { id } = useParams<RouteRouteParameters>();
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
      id,
    }
  );

  if (!data.quest) {
    return (
      <Redirect to="/routes"/>
    );
  }

  return (
    <Wrapper>
      <GoingBackButton to="/routes"/>
      <Image src={data.quest.photo ? data.quest.photo : 'https://picsum.photos/seed/picsum/200/100'}/>
      <InformationWrapper>
        <Name>{ data.quest.name }</Name>
        <Author>{ t('author') }: ИТМО</Author>
        <Description>{ data.quest.description }</Description>
        <CenterWrapper>
          <StartRouteButton>{ t('route.startRoute') }</StartRouteButton>
        </CenterWrapper>
      </InformationWrapper>
    </Wrapper>
  );
}
