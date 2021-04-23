import { ReactElement } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useLazyLoadQuery } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { LocationInstanceCardQuery } from './__generated__/LocationInstanceCardQuery.graphql';
import {
  CardWrapper, Description,
  GoingBackButton,
  Image,
  InformationWrapper,
  Name
} from './cards';

/**
 * Parameters of '/location-instance' route
 */
interface LocationInstanceRouteParameters {
  /**
   * Id of current location instance
   */
  locationInstanceId: string;
}

/**
 *
 */
export default function LocationInstanceCard(): ReactElement {
  const { locationInstanceId } = useParams<LocationInstanceRouteParameters>();
  const data = useLazyLoadQuery<LocationInstanceCardQuery>(
    graphql`
      query LocationInstanceCardQuery($id: GlobalId!) {
        locationInstance(id: $id) {
          mainPhotoLink
          name
          location {
            addresses {
              address
            }
          }
          relations {
            person {
              lastName
              firstName
              patronymic
              mainPhotoLink
            }
          }
          description
          architects {
            lastName
            firstName
            patronymic
          }
          constructionDate
          demolitionDate
          wikiLink
        }
      }
    `,
    {
      id: locationInstanceId,
    }
  );

  if (!data.locationInstance) {
    return (
      <Redirect to="/"/>
    );
  }

  return (
    <CardWrapper>
      <GoingBackButton to="/"/>
      <Image src={data.locationInstance.mainPhotoLink ? data.locationInstance.mainPhotoLink : 'https://picsum.photos/seed/picsum/200/100'}/>
      <InformationWrapper>
        <Name>{data.locationInstance.name}</Name>
        <Description>{data.locationInstance.description}</Description>
      </InformationWrapper>
    </CardWrapper>
  );
}
