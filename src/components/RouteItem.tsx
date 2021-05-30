import { ReactElement } from 'react';
import { useFragment } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { useTranslation } from 'react-i18next';
import { RouteItem_quest$key } from './__generated__/RouteItem_quest.graphql';
import { Item, Delimiter, InformationWrapper, SecondaryInformation } from './lists';
import { ImageInItem } from './lib/Image';

/**
 * Props with route fragment
 */
interface RouteItemProps {
  /**
   * Route data as fragment
   */
  route: RouteItem_quest$key;
}

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
      <ImageInItem src={route.photo} type={'route'}/>
      <InformationWrapper>
        {route.name}
        <Delimiter/>
        <SecondaryInformation>
          { t('author') }: ИТМО
        </SecondaryInformation>
      </InformationWrapper>
    </Item>
  );
}
