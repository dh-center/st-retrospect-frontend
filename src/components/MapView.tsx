import { ReactElement, useContext, useEffect, useRef, useState } from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl, { LngLatBoundsLike, AnyLayer } from '!mapbox-gl';
import styled from 'styled-components';
import LanguageContext, { AvailableLanguages } from '../contexts/LanguageContext';
import { useRouteMatch } from 'react-router-dom';
import { fetchQuery } from 'relay-runtime';
import { useRelayEnvironment } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import {
  MapViewPersonLocationsQuery
} from './__generated__/MapViewPersonLocationsQuery.graphql';
import { MapViewQuestLocationQuery } from './__generated__/MapViewQuestLocationQuery.graphql';
import { LocationInstanceBlock, QuestBlock } from '../interfaces/QuestBlocks';
import { MapViewQuestQuery } from './__generated__/MapViewQuestQuery.graphql';

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
  const personRouteMatch = useRouteMatch<{personId: string}>('/person/:personId');
  const questRouteMatch = useRouteMatch<{questId: string}>('/route/:questId');
  const environment = useRelayEnvironment();
  const [currentMarkers, setCurrentMarkers] = useState<{latitude: number, longitude: number}[]>();

  /**
   * useEffect hook for '/person/:personId' route
   * Fetches related locations and sets them as current markers
   */
  useEffect(() => {
    /**
     * Fetch information about relations of person
     */
    const fetchData = async (): Promise<void> => {
      if (!personRouteMatch) {
        return;
      }
      const data = await fetchQuery<MapViewPersonLocationsQuery>(
        environment,
        graphql`
          query MapViewPersonLocationsQuery($id: GlobalId!) {
            person(id: $id) {
              relations {
                locationInstance {
                  location {
                    latitude
                    longitude
                  }
                }
              }
            }
          }
        `,
        {
          id: personRouteMatch.params.personId,
        }
      ).toPromise();

      if (!data) {
        return;
      }

      /**
       * Gets coordinates of related locations
       */
      const locationsCoordinates = data.person?.relations
        .filter((relation): relation is { locationInstance: { location: { latitude: number, longitude: number } } } => {
          return typeof relation.locationInstance?.location.latitude === 'number' && typeof relation.locationInstance?.location.longitude === 'number' ;
        })
        .map(relation => {
          return {
            latitude: relation.locationInstance.location.latitude,
            longitude: relation.locationInstance.location.longitude,
          };
        });

      /**
       * Sets person's locations as current markers
       */
      setCurrentMarkers(locationsCoordinates);
    };

    fetchData();
  }, [ personRouteMatch?.params.personId ]);

  /**
   * useEffect hook for '/route/:questId' route
   * Fetches quest locations
   */
  useEffect(() => {
    /**
     * Fetch information about quest locations
     */
    const fetchData = async (): Promise<void> => {
      if (!questRouteMatch) {
        return;
      }
      const data = await fetchQuery<MapViewQuestQuery>(
        environment,
        graphql`
          query MapViewQuestQuery($id: GlobalId!) {
            quest(id: $id) {
              data {
                blocks
              }
            }
          }
        `,
        {
          id: questRouteMatch.params.questId,
        }
      ).toPromise();

      if (!data || !data.quest?.data?.blocks) {
        return;
      }

      const questDataBlocks = data.quest.data?.blocks as QuestBlock[];

      const locationInstances = await Promise.all(questDataBlocks
        .filter((block): block is LocationInstanceBlock => block.type === 'locationInstance')
        .map(block => block.data.locationInstanceId)
        .map(async (id) => {
          const response = await fetchQuery<MapViewQuestLocationQuery>(
            environment,
            graphql`
              query MapViewQuestLocationQuery($id: GlobalId!) {
                locationInstance(id: $id) {
                  location {
                    latitude
                    longitude
                  }
                }
              }
            `,
            {
              id,
            }
          ).toPromise();

          return response?.locationInstance;
        }));

      const locationCoordinates = locationInstances
        .filter((locationInstance): locationInstance is { location: { latitude: number, longitude: number } } => typeof locationInstance?.location.latitude === 'number' && typeof locationInstance?.location.longitude === 'number')
        .map(locationInstance => {
          return {
            latitude: locationInstance.location.latitude,
            longitude: locationInstance.location.longitude,
          };
        });

      setCurrentMarkers(locationCoordinates);
    };

    fetchData();
  }, [ questRouteMatch?.params.questId ]);

  useEffect(() => console.log(currentMarkers), [ currentMarkers ]);

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

  return (
    <div>
      <MapContainer ref={mapContainer}/>
    </div>
  );
}
