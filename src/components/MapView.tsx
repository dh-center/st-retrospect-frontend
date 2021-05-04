import { ReactElement, useContext, useEffect, useRef, useState } from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl, { LngLatBoundsLike, AnyLayer } from '!mapbox-gl';
import styled from 'styled-components';
import LanguageContext, { AvailableLanguages } from '../contexts/LanguageContext';
import useCurrentMapContent from '../contexts/CurrentMapContentContext';

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
 * Component displays map view
 */
export default function MapView(): ReactElement {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map>();
  const [mapState, setMapState] = useState({
    lng: 30.28617,
    lat: 59.93944,
    zoom: 11.5,
  });
  const { userLanguage } = useContext(LanguageContext);
  const { currentLocations } = useCurrentMapContent();

  /**
   * Changes map language
   *
   * @param language - new map language
   */
  const changeMapLanguage = (language: AvailableLanguages): void => {
    if (map.current && map.current.isStyleLoaded()) {
      const textLayers = map.current.getStyle().layers.filter((layer: AnyLayer) => layer.type === 'symbol');

      textLayers.map((layer: AnyLayer) => {
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
        style: 'mapbox://styles/mapbox/light-v10',
        center: [mapState.lng, mapState.lat],
        zoom: mapState.zoom,
        maxBounds: MAX_BOUNDS,
      });

      const navigationControl = new mapboxgl.NavigationControl();
      const fullscreenControl = new mapboxgl.FullscreenControl();
      const attributionControl = new mapboxgl.AttributionControl({ compact: true });

      map.current.addControl(fullscreenControl, 'top-right');
      map.current.addControl(navigationControl, 'top-right');
      map.current.addControl(attributionControl, 'bottom-right');

      map.current.on('move', () => {
        map.current && setMapState({
          lng: +map.current.getCenter().lng.toFixed(4),
          lat: +map.current.getCenter().lat.toFixed(4),
          zoom: +map.current.getZoom().toFixed(2),
        });
      });

      /**
       * When style loaded first time, we set interface language
       */
      map.current.once('styledata', () => {
        /**
         * Style data event can be fire, but we need to check is style loaded or not
         */
        const waitStyleLoading = (): void => {
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

  /**
   * Adds new current markers to map
   */
  useEffect(() => {
    if (!map.current) {
      return;
    }

    const markers = currentLocations
      .filter((loc) => loc.longitude && loc.latitude)
      .map(location => {
        const marker = new mapboxgl.Marker()
          .setLngLat([location.longitude || 0, location.latitude || 0]);

        marker.addTo(map.current);

        return marker;
      });

    return () => {
      markers.forEach(marker => marker.remove());
    };
  }, [ currentLocations ]);

  return (
    <div>
      <MapContainer ref={mapContainer}/>
    </div>
  );
}
