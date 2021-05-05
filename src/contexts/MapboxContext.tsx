import React, { useContext } from 'react';
import mapboxgl from 'mapbox-gl';

interface MapboxContextValue {
  map: mapboxgl.Map | undefined;
}

export const MapboxContext = React.createContext<MapboxContextValue | undefined>(undefined);

// export function MapboxContextProvider(props: React.PropsWithChildren<unknown>) {
//   const map = useRef<mapboxgl.Map>();
//   return (
//     <MapboxContext.Provider value={}>
//       {props.children}
//     </MapboxContext.Provider>
//   )
// }


/**
 *
 */
export default function useMapboxContext(): MapboxContextValue {
  const context = useContext(MapboxContext);

  if (!context) {
    throw new Error('ef');
  }

  return context;
}
