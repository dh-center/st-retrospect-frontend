import styled from 'styled-components';
import { ReactElement } from 'react';

/**
 * Overlay component props
 */
interface OverlayProps {
  /**
   * Is overlay show
   */
  show: boolean;
}

const OverlayBlock = styled.div<OverlayProps>`
  width: 100%;
  height: 100%;

  visibility: ${ props => props.show ? 'visible' : 'hidden' };

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  background: #000;
  opacity: ${ props => props.show ? '0.7' : '0' };
  transition: opacity ease-out .3s,
              visibility ease-out .3s;
`;

/**
 * Overlay component for modal windows or asides
 *
 * @param props - props of component
 */
function Overlay(props: OverlayProps): ReactElement {
  return <OverlayBlock show={props.show}/>;
}

export default Overlay;
