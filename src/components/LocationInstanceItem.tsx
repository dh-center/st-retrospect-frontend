import { ReactElement } from 'react';
import { Item, Image, Delimiter, InformationWrapper, SecondaryInformation } from './lists';
import styled from 'styled-components';
import MapPin from '../assets/map-pin.svg';

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
 */
export default function LocationInstanceItem(): ReactElement {
  return (
    <Item to={'/'}>
      <Image src={'https://picsum.photos/seed/picsum/100/200'}/>
      <InformationWrapper>
        Большой Петергофский дворец
        <Delimiter/>
        <Address>
          <AddressIcon/>
          Петергоф, ул. Разводная, д. 2
        </Address>
      </InformationWrapper>
    </Item>
  );
}
