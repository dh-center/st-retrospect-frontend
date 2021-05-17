import { ReactElement } from 'react';
import { Item, Image, Delimiter, InformationWrapper, SecondaryInformation } from './lists';
import styled from 'styled-components';
import MapPin from '../assets/map-pin.svg';
import { useFragment } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { LocationInstanceItem_locationInstance$key } from './__generated__/LocationInstanceItem_locationInstance.graphql';
import { useTranslation } from 'react-i18next';

/**
 * Props of component
 */
interface LocationInstanceItemProps {
  /**
   * Location instance fragment ref for displaying
   */
  locationInstance: LocationInstanceItem_locationInstance$key;
}

const AddressIcon = styled.div`
  flex-shrink: 0;

  width: 12px;
  height: 15px;
  margin-right: 6px;

  background-image: url("${MapPin}");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Address = styled(SecondaryInformation)`
  display: flex;
  align-items: center;
`;

/**
 * Location instance item card in list
 *
 * @param props - props of component
 */
export default function LocationInstanceItem(props: LocationInstanceItemProps): ReactElement {
  const { t } = useTranslation();
  const data = useFragment(
    graphql`
      fragment LocationInstanceItem_locationInstance on LocationInstance {
        id
        mainPhotoLink
        name
        location {
          addresses {
            address
          }
        }
      }
    `,
    props.locationInstance
  );

  return (
    <Item to={`/location-instance/${data.id}`}>
      <Image src={data.mainPhotoLink ? data.mainPhotoLink : 'https://picsum.photos/seed/picsum/100/200'}/>
      <InformationWrapper>
        {data.name}
        <Delimiter/>
        <Address>
          <AddressIcon/>
          { !!data.location.addresses?.length ? data.location.addresses[0].address : t('locationInstance.noAddress') }
        </Address>
      </InformationWrapper>
    </Item>
  );
}
