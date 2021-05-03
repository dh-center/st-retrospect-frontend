// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl, { LngLatLike } from '!mapbox-gl';
import { createContext, ReactElement, useEffect, useState } from 'react';
import WithChildren from '../interfaces/WithChildren';
import { useRouteMatch } from 'react-router-dom';
import { PersonRouteParameters, QuestRouteParameters } from '../interfaces/routeParameters';
import { useRelayEnvironment } from 'react-relay';
import { fetchQuery } from 'relay-runtime';
import graphql from 'babel-plugin-relay/macro';
import { LocationInstanceBlock, QuestBlock } from '../interfaces/QuestBlocks';
import { CurrentMarkersContextProviderQuestLocationQuery } from './__generated__/CurrentMarkersContextProviderQuestLocationQuery.graphql';
import { CurrentMarkersContextProviderQuestQuery } from './__generated__/CurrentMarkersContextProviderQuestQuery.graphql';
import { CurrentMarkersContextProviderPersonLocationsQuery } from './__generated__/CurrentMarkersContextProviderPersonLocationsQuery.graphql';

/**
 * Props of CurrentMarkersContext
 */
interface CurrentMarkersContextProps {
  /**
   * Current markers
   */
  currentMarkers: mapboxgl.Marker[];
}

/**
 * Context with current markers
 */
export const CurrentMarkersContext = createContext<CurrentMarkersContextProps>({
  /**
   * Array of current markers
   */
  currentMarkers: [],
});

/**
 * Provider of current markers context
 * With fetching new data on route matches
 *
 * @param props - props of component
 */
export default function CurrentMarkersContextProvider(props: WithChildren): ReactElement {
  const [currentMarkers, setCurrentMarkers] = useState<mapboxgl.Marker[]>([]);
  const [currentMarkerCoordinates, setCurrentMarkerCoordinates] = useState<LngLatLike[]>([]);

  const personRouteMatch = useRouteMatch<PersonRouteParameters>('/person/:personId');
  const questRouteMatch = useRouteMatch<QuestRouteParameters>('/route/:questId');
  const environment = useRelayEnvironment();

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
      const data = await fetchQuery<CurrentMarkersContextProviderPersonLocationsQuery>(
        environment,
        graphql`
          query CurrentMarkersContextProviderPersonLocationsQuery($id: GlobalId!) {
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
        .filter((relation): relation is {
          locationInstance: {
            location: {
              latitude: number,
              longitude: number
            }
          }
        } => {
          return typeof relation.locationInstance?.location.latitude === 'number' && typeof relation.locationInstance?.location.longitude === 'number' ;
        })
        .map(relation => {
          return {
            lat: relation.locationInstance.location.latitude,
            lng: relation.locationInstance.location.longitude,
          };
        });

      /**
       * Sets person's locations as current markers
       */
      setCurrentMarkerCoordinates(locationsCoordinates || []);
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
      const data = await fetchQuery<CurrentMarkersContextProviderQuestQuery>(
        environment,
        graphql`
          query CurrentMarkersContextProviderQuestQuery($id: GlobalId!) {
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

      /**
       * Fetches location instances from quest
       */
      const locationInstances = await Promise.all(questDataBlocks
        .filter((block): block is LocationInstanceBlock => block.type === 'locationInstance')
        .map(block => block.data.locationInstanceId)
        .map(async (id) => {
          const response = await fetchQuery<CurrentMarkersContextProviderQuestLocationQuery>(
            environment,
            graphql`
            query CurrentMarkersContextProviderQuestLocationQuery($id: GlobalId!) {
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

      /**
       * Coordinates of current location instances
       */
      const locationCoordinates = locationInstances
        .filter((locationInstance): locationInstance is {
          location: {
            latitude: number,
            longitude: number
          }
        } => typeof locationInstance?.location.latitude === 'number' && typeof locationInstance?.location.longitude === 'number')
        .map(locationInstance => {
          return {
            lat: locationInstance.location.latitude,
            lng: locationInstance.location.longitude,
          };
        });

      setCurrentMarkerCoordinates(locationCoordinates);
    };

    fetchData();
  }, [ questRouteMatch?.params.questId ]);

  /**
   * Changes markers on map
   */
  useEffect(() => {
    /**
     * Removes old markers from map
     */
    currentMarkers.forEach(marker => marker.remove());

    /**
     * Creates new markers and adds them to the map
     */
    const newMarkers = currentMarkerCoordinates.map(markerCoordinates => {
      return new mapboxgl.Marker()
        .setLngLat(markerCoordinates);
    });

    setCurrentMarkers(newMarkers);
  }, [ currentMarkerCoordinates ]);

  return (
    <CurrentMarkersContext.Provider
      value={{
        currentMarkers: currentMarkers,
      }}
    >
      {props.children}
    </CurrentMarkersContext.Provider>
  );
}
