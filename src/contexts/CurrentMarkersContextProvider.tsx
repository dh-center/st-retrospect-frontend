// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl, { LngLatLike } from '!mapbox-gl';
import { createContext, ReactElement, useState } from 'react';
import WithChildren from '../interfaces/WithChildren';

/**
 * Props of CurrentMarkersContext
 */
interface CurrentMarkersContextProps {
  /**
   * Current markers
   */
  currentMarkers: mapboxgl.Marker[];

  /**
   * Sets new markers coordinates
   *
   * @param coordinates - array of new coordinates
   */
  setCurrentMarkersCoordinates: (coordinates: LngLatLike[]) => void;
}

/**
 * Context with current markers
 */
export const CurrentMarkersContext = createContext<CurrentMarkersContextProps>({
  /**
   * Array of current markers
   */
  currentMarkers: [],

  /**
   * Sets new markers coordinates
   *
   * @param coordinates - array of new coordinates
   */
  setCurrentMarkersCoordinates: (coordinates: LngLatLike[]) => {
    return coordinates;
  },
});

/**
 * Provider of current markers context
 *
 * @param props - props of component
 */
export default function CurrentMarkersContextProvider(props: WithChildren): ReactElement {
  const [currentMarkers, setCurrentMarkers] = useState<mapboxgl.Marker[]>([]);

  return (
    <CurrentMarkersContext.Provider
      value={{
        currentMarkers: currentMarkers,
        setCurrentMarkersCoordinates: (coordinates: LngLatLike[]) => {
          /**
           * Removes old markers from map
           */
          currentMarkers.forEach(marker => marker.remove());

          /**
           * Creates new markers and adds them to the map
           */
          const newMarkers = coordinates.map(markerCoordinates => {
            return new mapboxgl.Marker()
              .setLngLat(markerCoordinates);
          });

          setCurrentMarkers(newMarkers);
        },
      }}
    >
      {props.children}
    </CurrentMarkersContext.Provider>
  );
}
