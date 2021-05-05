import { ReactElement, useEffect, useRef } from 'react';
import RelationCard from './RelationCard';
import { useFragment } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { RelationsPopup_relations$key } from './__generated__/RelationsPopup_relations.graphql';
import useMapboxContext from '../../contexts/MapboxContext';
import mapboxgl from 'mapbox-gl';

interface RelationsPopupProps {
  relation: RelationsPopup_relations$key;
}

/**
 * @param props - props of component
 */
export default function RelationsPopup(props: RelationsPopupProps): ReactElement {
  const { map } = useMapboxContext();

  const popupRef = useRef<HTMLDivElement>(null);

  const data = useFragment(
    graphql`
      fragment RelationsPopup_relations on LocationInstance {
        location {
          longitude
          latitude
        }
        relations {
          ...RelationCard_relation
        }
      }
    `,
    props.relation
  );


  useEffect(() => {
    if (!map || !popupRef.current) {
      return;
    }
    const popup = new mapboxgl.Popup()
      .setLngLat([data.location.longitude || 0, data.location.latitude || 0])
      .setDOMContent(popupRef.current)
      .addTo(map);

    return () => {
      popup.remove();
    };
  }, []);

  return (
    <div style={{ display: 'none' }}>
      <div ref={popupRef}>
        {
          data.relations.map((relation, index) => <RelationCard key={index} relation={relation}/>)
        }
      </div>
    </div>
  );
}
