import { ReactElement } from 'react';
import { useLazyLoadQuery } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import styled from 'styled-components';
import { LocationInstanceBlockQuery } from './__generated__/LocationInstanceBlockQuery.graphql';
import { Redirect } from 'react-router-dom';
import { sansSerifLight } from '../../styles/FontStyles';
import MapPin from '../../assets/map-pin.svg';
import { ImageInCard } from '../lib/Image';

/**
 * Props of component
 */
interface LocationInstanceBlockProps {
  /**
   * Location instance id for rendering
   */
  locationInstanceId: string;
}

const InformationWrapper = styled.div`
  padding: 16px;
`;

const Title = styled.div`
  font-size: 16px;
`;

const Address = styled.div`
  margin-top: 12px;

  ${ sansSerifLight };
  font-size: 14px;

  &::before {
    content: '';

    display: inline-block;
    width: 12px;
    height: 15px;
    margin-right: 6px;

    background-image: url("${MapPin}");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

/**
 * Location instance block from route data
 *
 * @param props - props of component
 */
export default function LocationInstanceBlock(props: LocationInstanceBlockProps): ReactElement {
  const data = useLazyLoadQuery<LocationInstanceBlockQuery>(
    graphql`
      query LocationInstanceBlockQuery($id: GlobalId!) {
        locationInstance(id: $id) {
          id
          name
          mainPhotoLink
          location {
            addresses {
              address
            }
          }
        }
      }
    `,
    {
      id: props.locationInstanceId,
    }
  );

  if (!data.locationInstance) {
    return <Redirect to="/routes"/>;
  }

  return (
    <>
      <ImageInCard src={data.locationInstance.mainPhotoLink} type={'location'}/>
      <InformationWrapper>
        <Title>
          {data.locationInstance.name}
        </Title>
        { !!data.locationInstance.location.addresses?.length &&
          <Address>
            {data.locationInstance.location.addresses[0].address}
          </Address>
        }
      </InformationWrapper>
    </>
  );
}
