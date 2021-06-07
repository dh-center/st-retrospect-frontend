import { ReactElement, useEffect, useRef, useState } from 'react';
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

  const data = useFragment(
    graphql`
      fragment LocationInstanceRelationsPopup_data on LocationInstance {
        location {
          longitude
          latitude
        }
        name
        relations {
          id
          ...RelationCard_relation
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

  useEffect(() => {
    const defaultRelationIndex = data.relations.findIndex(
      relation => currentRelationIds.find(
        currentRelationId => currentRelationId === relation.id
      )
    );

    setCurrentIndex(defaultRelationIndex === -1 ? 0 : defaultRelationIndex);
  }, [ currentRelationIds ]);

  return (
    <>
      <Marker
        lngLat={[data.location.longitude || 0, data.location.latitude || 0]}
        markerRef={(ref) => markerRef.current = ref}
      >
        <svg style={{ transform: 'translateY(-50%)' }} width="24.5" height="30" viewBox="0 0 72 88" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M72 36C72 64 36 88 36 88C36 88 0 64 0 36C1.42273e-07 26.4522 3.79285 17.2955 10.5442 10.5442C17.2955 3.79285 26.4522 0 36 0C45.5478 0 54.7045 3.79285 61.4558 10.5442C68.2072 17.2955 72 26.4522 72 36Z" fill="#2F80ED"/>
          <path d="M35.9995 48.0003C42.6269 48.0003 47.9995 42.6277 47.9995 36.0003C47.9995 29.3729 42.6269 24.0003 35.9995 24.0003C29.3721 24.0003 23.9995 29.3729 23.9995 36.0003C23.9995 42.6277 29.3721 48.0003 35.9995 48.0003Z" fill="white"/>
        </svg>
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
          { data.relations && data.relations.length > 0 ? <RelationCard relation={data.relations[currentIndex]}/> : t('relations.noRelations') }
        </Wrapper>
      </Popup>
    </>
  );
}
