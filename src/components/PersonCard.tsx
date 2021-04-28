import { ReactElement } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLazyLoadQuery } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { PersonCardQuery } from './__generated__/PersonCardQuery.graphql';
import styled from 'styled-components';
import {CardWrapper, GoingBackButton} from './cards';

/**
 * Parameters of '/person' route
 */
interface PersonRouteParameters {
  /**
   * Id of current person
   */
  personId: string;
}

const CardWrapperWithScroll = styled(CardWrapper)`
  padding: 40px 16px;

  overflow-y: auto;
`;

/**
 * Card of person with information about it
 */
export default function PersonCard(): ReactElement {
  const { personId } = useParams<PersonRouteParameters>();
  const { t } = useTranslation();
  const data = useLazyLoadQuery<PersonCardQuery>(
    graphql`
      query PersonCardQuery($id: GlobalId!) {
        person(id: $id) {
          lastName
          firstName
          patronymic
          mainPhotoLink
          birthDate
          deathDate
          description
          wikiLink
        }
      }
    `,
    {
      id: personId,
    }
  );

  console.log(t);
  console.log(data);

  return (
    <CardWrapperWithScroll>
      <GoingBackButton/>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque augue nibh, suscipit nec ipsum ac, cursus consequat metus. Sed eu nulla sit amet purus sagittis molestie. Mauris nec eleifend mi. Nam quis erat ac velit suscipit placerat. Nulla imperdiet tincidunt volutpat. Mauris vehicula libero tellus, non varius urna tempus at. Nam quis tortor porta lacus ultricies scelerisque sit amet ut eros. In tristique quam eget facilisis commodo. Fusce tempus elit elit, et tincidunt velit rhoncus at. Integer at est lectus. In hac habitasse platea dictumst. Nam eu tempor ligula.

      Integer eu nisl aliquam, vulputate ante ut, tempor magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus porttitor in urna quis congue. Aliquam tellus nisi, porta nec massa at, molestie molestie mi. Mauris fermentum mi non massa fermentum, eu rutrum orci venenatis. Maecenas in massa laoreet, auctor urna eget, iaculis mi. Fusce ante sapien, blandit id iaculis eget, maximus nec turpis. Phasellus rhoncus, justo a molestie eleifend, ante nibh convallis arcu, non malesuada massa felis sit amet erat. Fusce elit orci, dictum at interdum eget, condimentum eu sapien. Donec sem mi, ultricies sed tempor at, egestas egestas mi.

      Ut et maximus massa. Donec eget dignissim enim, pellentesque sodales turpis. Ut tempus posuere neque, in dictum massa eleifend a. Nam et mi justo. Ut pharetra purus vitae nunc varius fringilla. Aenean congue eget eros in rutrum. Nullam hendrerit eget magna sed tristique.

      Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In dapibus lorem est, vitae hendrerit tellus egestas sit amet. Mauris vestibulum iaculis tellus, id sodales quam porttitor sed. Quisque sed arcu bibendum, eleifend eros a, congue ipsum. Nunc at lacus ac sem tincidunt bibendum. Fusce pellentesque odio vitae ipsum malesuada tincidunt. Cras egestas dapibus ante non mattis. Pellentesque id porttitor sapien.

      Morbi faucibus tortor at erat tempor auctor. Aliquam tristique mauris vitae porta laoreet. Sed ac euismod felis, dignissim facilisis metus. Praesent mattis fringilla lectus ac venenatis. Aliquam tellus ante, accumsan at molestie in, porta non erat. Sed id vestibulum nunc. Pellentesque fermentum posuere sollicitudin. Ut sit amet augue posuere, varius augue ac, vulputate urna. Aenean commodo pharetra erat eget scelerisque.
    </CardWrapperWithScroll>
  );
}
