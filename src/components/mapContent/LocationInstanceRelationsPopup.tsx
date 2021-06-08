import { ReactElement, ReactNode, useEffect, useMemo, useRef, useState } from 'react';
import RelationCard from './RelationCard';
import { useFragment } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import useMapboxContext from '../../contexts/MapboxContext';
import { LocationInstanceRelationsPopup_data$key } from './__generated__/LocationInstanceRelationsPopup_data.graphql';
import styled from 'styled-components';
import ArrowButton from '../buttons/ArrowButton';
import { useRouteMatch } from 'react-router-dom';
import { QuestPassingRouteParameters } from '../../interfaces/routeParameters';
import useCurrentMapContent from '../../contexts/CurrentMapContentContext';
import Marker from './Marker';
import Popup from './Popup';
import mapboxgl from 'mapbox-gl';
import { sansSerifLight, sansSerifRegular } from '../../styles/FontStyles';
import { useTranslation } from 'react-i18next';
import Delimiter from '../utils/Delimiter';
import getRelationTypeMarkerById from '../../lib/getRelationTypeMarkerById';

/**
 * Props of component
 */
interface LocationInstanceRelationsPopupProps {
  /**
   * Location fragment ref
   */
  location: LocationInstanceRelationsPopup_data$key;
}

const Wrapper = styled.div`
  background: var(--color-white);
  border-radius: 2px;
  box-shadow: var(--shadow-medium);

  position: relative;
  top: -55px;
  left: 25px;

  padding: 24px 16px;

  width: 372px;

  font-size: 14px;
  ${ sansSerifLight };
`;

const Title = styled.div`
  font-size: 16px;
  ${ sansSerifRegular };
`;

const MarkerWrapper = styled.div`
  width: 24.5px;
  height: 30px;

  transform: translateY(-50%);

  svg {
    width: 100%;
    height: 100%;
  }
`;

const LeftArrowButton = styled(ArrowButton)`
  position: absolute;
  left: -6px;
  top: 50%;
  transform: translate(-100%, -50%);
  z-index: 1000;
`;

const RightArrowButton = styled(LeftArrowButton)`
  left: auto;
  transform: translate(100%, -50%);
  right: -6px;
`;

/**
 * Location instance popup with information about relations
 *
 * @param props - props of component
 */
export default function LocationInstanceRelationsPopup(props: LocationInstanceRelationsPopupProps): ReactElement {
  const { t } = useTranslation();
  const { map } = useMapboxContext();
  const [currentIndex, setCurrentIndex] = useState(0);
  const { currentLocations, currentRelationIds } = useCurrentMapContent();
  const routePassingMatch = useRouteMatch<QuestPassingRouteParameters>('/route/:questId/:currentLocationIndex');
  const popupRef = useRef<mapboxgl.Popup>();
  const markerRef = useRef<mapboxgl.Marker>();
  const [relationCards, setRelationCards] = useState<ReactNode[]>([]);

  const data = useFragment(
    graphql`
      fragment LocationInstanceRelationsPopup_data on LocationInstance {
        location {
          longitude
          latitude
        }
        name
        relations {
          ...RelationCard_relation
          id
          relationType {
            id
            name
          }
        }
      }
    `,
    props.location
  );

  useEffect(() => {
    if (popupRef.current && markerRef.current) {
      markerRef.current.setPopup(popupRef.current);
    }
  }, [popupRef.current, markerRef.current]);

  /**
   * Fly to point on route passing
   */
  useEffect(() => {
    if (!routePassingMatch || !map) {
      return;
    }

    if (currentLocations.indexOf(props.location) !== +routePassingMatch.params.currentLocationIndex) {
      return;
    }

    map.flyTo({
      center: [data.location.longitude || 0, data.location.latitude || 0],
      zoom: 14,
    });
  }, [ routePassingMatch?.params ]);

  const defaultRelationIndex = useMemo(
    () => data.relations.findIndex(
      relation => currentRelationIds.find(
        currentRelationId => currentRelationId === relation.id
      )
    ),
    [data.relations, currentRelationIds]
  );

  const defaultRelation = useMemo(
    () => data.relations.find(
      relation => currentRelationIds.find(
        currentRelationId => currentRelationId === relation.id
      )
    ),
    [data.relations, currentRelationIds]
  );

  const RelationTypeMarker = getRelationTypeMarkerById(defaultRelation?.relationType.id || '');

  useEffect(() => {
    setCurrentIndex(defaultRelationIndex === -1 ? 0 : defaultRelationIndex);
  }, [ currentRelationIds ]);

  useEffect(() => {
    if (!data.relations) {
      return;
    }

    setRelationCards(
      data.relations.map(
        relation => {
          return <RelationCard relation={relation} key={relation.id}/>;
        }
      )
    );
  }, [ data.relations ]);

  return (
    <>
      <Marker
        lngLat={[data.location.longitude || 0, data.location.latitude || 0]}
        markerRef={(ref) => markerRef.current = ref}
      >
        <MarkerWrapper title={defaultRelation?.relationType.name || 'Что-то тут забыл'}>
          <RelationTypeMarker/>
        </MarkerWrapper>
      </Marker>
      <Popup
        popupRef={(ref) => popupRef.current = ref}
      >
        <Wrapper>
          {
            data.relations.length > 1 &&
              <>
                <LeftArrowButton
                  onClick={() => {
                    if(currentIndex - 1 < 0) {
                      setCurrentIndex(data.relations.length - 1);
                    } else {
                      setCurrentIndex(currentIndex - 1);
                    }
                  }}/>
                <RightArrowButton
                  arrowDirection={'right'}
                  onClick={() => {
                    if (currentIndex + 1 >= data.relations.length) {
                      setCurrentIndex(0);
                    } else {
                      setCurrentIndex(currentIndex + 1);
                    }
                  }}
                />
              </>
          }
          <Title>{data.name}</Title>
          <Delimiter/>
          { relationCards && relationCards.length > 0 ? relationCards[currentIndex] : t('relations.noRelations') }
        </Wrapper>
      </Popup>
    </>
  );
}
