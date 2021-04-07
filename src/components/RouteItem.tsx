import styled from 'styled-components';
import { sansSerifLight } from '../styles/FontStyles';
import { ReactElement } from 'react';
import { useFragment } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { useTranslation } from 'react-i18next';
import { RouteItem_quest$key } from './__generated__/RouteItem_quest.graphql';
import { Link } from 'react-router-dom';

/**
 * Props with route fragment
 */
interface RouteItemProps {
  /**
   * Route data as fragment
   */
  route: RouteItem_quest$key;
}

const Item = styled(Link)`
  display: flex;

  border: .5px solid #F2F2F2;
  border-radius: 2px;
  overflow: hidden;

  text-decoration: none;
  color: var(--color-dark-gray);

  &:not(:last-of-type) {
    margin-bottom: 12px;
  }

  &:hover {
    background: var(--color-light-blue);
  }
`;

/**
 * Props of image block in route item
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
 * Route item in routes list
 *
 * @param props - props of component
 */
export default function RouteItem(props: RouteItemProps): ReactElement {
  const { t } = useTranslation();
  const route = useFragment(
    graphql`
      fragment RouteItem_quest on Quest {
        id
        name
        photo
      }
    `,
    props.route
  );

  return (
    <Item to={`/route/${ route.id }`}>
      <Image src={route.photo ? route.photo : 'https://picsum.photos/seed/picsum/100/200'}/>
      <Information>
        {route.name}
        <Delimiter/>
        <Author>
          { t('author') }: ИТМО
        </Author>
      </Information>
    </Item>
  );
}
