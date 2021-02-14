import { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

const LeftPanelWrapper = styled.aside<LeftPanelProps>`
  height: 100vh;
  width: 372px;

  position: absolute;
  left: ${props => props.show ? '0' : '-372px'};
  top: 0;
  z-index: 1;

  padding: 0 16px;

  background: var(--color-white);
  box-shadow: var(--shadow-base);
  transition: left ease-out .3s;
`;

/**
 * LeftPanel component props interface
 */
interface LeftPanelProps {
  /**
   * Show or hide panel
   */
  show: boolean;

  /**
   * Children components
   */
  children?: ReactNode;

  /**
   * Component class name
   */
  className?: string;
}

/**
 * Displays panel on left
 * Can hide or show panel with 'show' prop
 *
 * @param props - component props
 */
function LeftPanel(props: LeftPanelProps): ReactElement {
  return (
    <LeftPanelWrapper show={props.show} className={props.className}>
      { props.children }
    </LeftPanelWrapper>
  );
}

LeftPanel.defaultProps = {
  show: true,
};

export default LeftPanel;
