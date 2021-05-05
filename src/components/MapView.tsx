import { ReactElement } from 'react';
import useCurrentMapContent from '../contexts/CurrentMapContentContext';
import LocationInstanceRelationsPopup from './mapContent/LocationInstanceRelationsPopup';
import Mapbox from './Mapbox';


/**
 * Component displays map view
 */
export default function MapView(): ReactElement {
  const { currentLocations } = useCurrentMapContent();

  return (
    <Mapbox>
      {currentLocations.map((location, index) => {
        return <LocationInstanceRelationsPopup key={index} location={location}/>;
      })}
    </Mapbox>
  );
}
