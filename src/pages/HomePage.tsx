import {ReactElement} from 'react';
import MapView from '../components/MapView';
import MainAside from '../components/asides/MainAside';

/**
 * View of home page
 */
function HomePage(): ReactElement {
  return (
    <div>
      <MainAside/>
      <MapView/>
    </div>
  );
}

export default HomePage;
