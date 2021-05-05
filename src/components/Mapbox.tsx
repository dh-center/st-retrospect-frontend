import React, { useContext, useEffect, useRef, useState } from 'react';
import LanguageContext, { AvailableLanguages } from '../contexts/LanguageContext';
import mapboxgl, { LngLatBoundsLike } from 'mapbox-gl';
import { MapboxContext } from '../contexts/MapboxContext';
import styled from 'styled-components';
import WithChildren from '../interfaces/WithChildren';
import { createPortal } from 'react-dom';

const MapContainer = styled.div`
  height: 100vh;
  width: 100vw;
`;

/**
 * Max map bounds
 * Restricts view area
 */
const MAX_BOUNDS: LngLatBoundsLike = [
  /**
   * Southwest coordinates
   */
  [
    29.281524984914313,
    59.62023377214044,
  ],

  /**
   * Northeast coordinates
   */
  [
    31.263740364566985,
    60.282501691026226,
  ],
];

/**
 * @param props
 */
export default function Mapbox(props: WithChildren): React.ReactElement {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map>();

  const { userLanguage } = useContext(LanguageContext);

  /**
   * Changes map language
   *
   * @param language - new map language
   */
  const changeMapLanguage = (language: AvailableLanguages): void => {
    if (!map.current) {
      return;
    }

    if (map.current && map.current.isStyleLoaded()) {
      const textLayers = map.current.getStyle().layers?.filter((layer) => layer.type === 'symbol');

      textLayers?.map((layer) => {
        if (!map.current) {
          return layer;
        }
        map.current.setLayoutProperty(layer.id, 'text-field', [
          'get',
          'name_' + language.toLowerCase(),
        ]);

        return layer;
      });
    }
  };

  useEffect(() => {
    if (mapContainer.current) {
      map.current = new mapboxgl.Map({
        attributionControl: false,
        logoPosition: 'bottom-right',
        container: mapContainer.current,
        accessToken: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN,
        style: 'mapbox://styles/mapbox/light-v10',
        center: [30.28617, 59.93944],
        zoom: 11.5,
        maxBounds: MAX_BOUNDS,
      });

      const navigationControl = new mapboxgl.NavigationControl();
      const fullscreenControl = new mapboxgl.FullscreenControl();
      const attributionControl = new mapboxgl.AttributionControl({ compact: true });

      map.current.addControl(fullscreenControl, 'top-right');
      map.current.addControl(navigationControl, 'top-right');
      map.current.addControl(attributionControl, 'bottom-right');

      /**
       * When style loaded first time, we set interface language
       */
      map.current.once('styledata', () => {
        /**
         * Style data event can be fire, but we need to check is style loaded or not
         */
        const waitStyleLoading = (): void => {
          if (!map.current) {
            return;
          }
          if (!map.current.isStyleLoaded()) {
            setTimeout(waitStyleLoading, 200);
          } else {
            if (userLanguage) {
              changeMapLanguage(userLanguage || AvailableLanguages.EN);
            }
          }
        };

        waitStyleLoading();
      });
    }
  }, []);

  useEffect(() => {
    changeMapLanguage(userLanguage);
  }, [ userLanguage ]);

  console.log('mapbox rendering')

  const canvas = map.current?.getCanvasContainer();

  return (
    <MapboxContext.Provider value={{ map: map.current }}>
      <div>
        <MapContainer ref={mapContainer}>
          {canvas && createPortal(props.children, canvas)}
        </MapContainer>
      </div>
    </MapboxContext.Provider>
  );
}
