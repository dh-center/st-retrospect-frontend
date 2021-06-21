import { ReactElement } from 'react';
import MapView from '../components/MapView';
import MainAside from '../components/asides/MainAside';
import MainAsidePocket from '../components/asides/MainAsidePocket';
import useBreakpoint from '../lib/useBreakpoint';

/**
 * View of home page
 */
function HomePage(): ReactElement {
  const breakpoint = useBreakpoint();

  return (
    <>
      { breakpoint.isPocket && <div>
        <MainAsidePocket/>
        <MapView/>
      </div> }
      { !breakpoint.isPocket && <div>
        <MainAside/>
        <MapView/>
      </div> }
    </>
  );
}

export default HomePage;
