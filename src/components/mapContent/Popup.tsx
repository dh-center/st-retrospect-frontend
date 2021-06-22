import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import { createPortal } from 'react-dom';
import WithChildren from '../../interfaces/WithChildren';

/**
 * Popup properties for rendering
 */
interface PopupProps extends WithChildren {
  /**
   * Callback for assigning ref of current popup
   *
   * @param ref - ref to assign
   */
  popupRef?: (ref: mapboxgl.Popup) => void;
}

/**
 * Creates mapbox popup on map
 *
 * @param props - props for component rendering
 */
export default function Popup(props: PopupProps): React.ReactElement {
  const popupContainer = useRef(document.createElement('div'));

  useEffect(() => {
    const popup = new mapboxgl
      .Popup({
        offset: [25, -55],
        maxWidth: 'none',
        closeButton: false,
        anchor: 'top-left',
      })
      .setDOMContent(popupContainer.current);

    if (props.popupRef) {
      props.popupRef(popup);
    }

    return () => {
      popup.remove();
    };
  }, [ popupContainer.current ]);

  return createPortal(props.children, popupContainer.current);
}
