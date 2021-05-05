import { ReactElement, useEffect, useRef } from 'react';
import RelationCard from './RelationCard';
import { useFragment } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import useMapboxContext from '../../contexts/MapboxContext';
import mapboxgl from 'mapbox-gl';
import { LocationInstanceRelationsPopup_data$key } from './__generated__/LocationInstanceRelationsPopup_data.graphql';

interface RelationsPopupProps {
  location: LocationInstanceRelationsPopup_data$key;
}

/**
 * @param props - props of component
 */
export default function LocationInstanceRelationsPopup(props: RelationsPopupProps): ReactElement {
  const { map } = useMapboxContext();

  const popupRef = useRef<HTMLDivElement>(null);
  const markerRef = useRef<HTMLDivElement>(null);

  const data = useFragment(
    graphql`
      fragment LocationInstanceRelationsPopup_data on LocationInstance {
        location {
          longitude
          latitude
        }
        relations {
          ...RelationCard_relation
        }
      }
    `,
    props.location
  );


  useEffect(() => {
    if (!map || !popupRef.current || !markerRef.current) {
      return;
    }
    const popup = new mapboxgl.Popup()
      .setDOMContent(popupRef.current)
      .addTo(map);

    const marker = new mapboxgl.Marker(markerRef.current)
      .setLngLat([data.location.longitude || 0, data.location.latitude || 0])
      .setPopup(popup)
      .addTo(map);

    return () => {
      popup.remove();
      marker.remove();
    };
  }, [map, data]);

  return (
    <div>
      <div
        style={{ background: 'red',
          height: '30px',
          width:'30px',
          zIndex: 100 }}
        ref={markerRef}
      />
      <div ref={popupRef}>
        {
          data.relations.map((relation, index) => <RelationCard key={index} relation={relation}/>)
        }
      </div>
    </div>
  );
}
