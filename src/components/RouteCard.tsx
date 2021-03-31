import styled from 'styled-components';
import { sansSerifLight } from '../styles/FontStyles';
import { ReactElement } from 'react';
import { useFragment } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { useTranslation } from 'react-i18next';
import { RouteCard_quest$key } from './__generated__/RouteCard_quest.graphql';

/**
 * Props with route fragment
 */
interface RouteCardProps {
  /**
   * Route data as fragment
   */
  route: RouteCard_quest$key;
}

const Card = styled.div`
  display: flex;
  margin-bottom: 12px;

  border: .5px solid #F2F2F2;
  border-radius: 2px;
  overflow: hidden;
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
  min-width: 60px;
  min-height: 100%;

  background-image: url("${ props => props.src }");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Information = styled.div`
  padding: 18px 12px;

  font-size: 16px;
`;

const Delimiter = styled.div`
  width: 60px;
  height: 1px;
  margin: 12px 0;

  background: var(--color-blue);
`;

const Author = styled.span`
  ${ sansSerifLight };
  font-size: 14px;
`;

/**
 * Route card in routes list
 *
 * @param props - props of component
 */
export default function RouteCard(props: RouteCardProps): ReactElement {
  const { t } = useTranslation();
  const route = useFragment(
    graphql`
      fragment RouteCard_quest on Quest {
        name
        photo
      }
    `,
    props.route
  );

  return (
    <Card>
      <Image src={route.photo ? route.photo : 'https://picsum.photos/seed/picsum/100/200'}/>
      <Information>
        {route.name}
        <Delimiter/>
        <Author>
          { t('author') }: ИТМО
        </Author>
      </Information>
    </Card>
  );
}
