import { ReactElement } from 'react';
import LocationInstanceItem from './LocationInstanceItem';
import { ListWrapper } from './lists';

/**
 * List of location instances
 */
export default function LocationInstancesList(): ReactElement {
  return (
    <ListWrapper hasNext={false}>
      <LocationInstanceItem/>
      <LocationInstanceItem/>
      <LocationInstanceItem/>
      <LocationInstanceItem/>
      <LocationInstanceItem/>
      <LocationInstanceItem/>
      <LocationInstanceItem/>
    </ListWrapper>
  );
}
