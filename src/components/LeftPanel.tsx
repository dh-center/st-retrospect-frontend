import { ReactElement } from 'react';
import styled from 'styled-components';
import WithClassName from '../interfaces/WithClassName';
import WithChildren from '../interfaces/WithChildren';

const LeftPanelWrapper = styled.aside<LeftPanelProps>`
  height: 100vh;
  width: 372px;

  position: absolute;
  left: ${props => props.show ? '0' : '-372px'};
  top: 0;
  z-index: 2;

  padding: 0 16px;

  background: var(--color-white);
  box-shadow: var(--shadow-base);
  transition: left ease-out .3s;
`;

/**
 * LeftPanel component props interface
 */
interface LeftPanelProps extends WithClassName, WithChildren {
  /**
   * Show or hide panel
   */
  show: boolean;
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
