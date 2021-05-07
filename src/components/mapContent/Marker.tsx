import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import WithChildren from '../../interfaces/WithChildren';
import useMapboxContext from '../../contexts/MapboxContext';
import mapboxgl, { LngLatLike } from 'mapbox-gl';

/**
 * Marker properties for rendering
 */
interface MarkerProps extends WithChildren {
  /**
   * Callback for assigning ref of current marker
   *
   * @param ref - ref to assign
   */
  markerRef?: (ref: mapboxgl.Marker) => void;

  /**
   * Marker coordinates
   */
  lngLat: LngLatLike;
}

/**
 * Creates marker on map
 *
 * @param props - props for component rendering
 */
export default function Marker(props: MarkerProps): React.ReactElement {
  const markerContainer = useRef(document.createElement('div'));
  const { map } = useMapboxContext();


  useEffect(() => {
    if (!map || !markerContainer.current) {
      return;
    }

    const marker = new mapboxgl.Marker(markerContainer.current)
      .setLngLat(props.lngLat)
      .addTo(map);

    if (props.markerRef) {
      props.markerRef(marker);
    }

    return () => {
      marker.remove();
    };
  }, [map, markerContainer.current]);

  return createPortal(props.children, markerContainer.current);
}
