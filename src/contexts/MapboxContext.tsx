import React, { useContext } from 'react';
import mapboxgl from 'mapbox-gl';

/**
 * Value of the mapbox context
 */
interface MapboxContextValue {
  /**
   * Current map index
   */
  map: mapboxgl.Map | undefined;
}

export const MapboxContext = React.createContext<MapboxContextValue | undefined>(undefined);

/**
 * Hook for accessing Mapbox context
 */
export default function useMapboxContext(): MapboxContextValue {
  const context = useContext(MapboxContext);

  if (!context) {
    throw new Error('ef');
  }

  return context;
}
