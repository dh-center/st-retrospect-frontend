import { ReactElement } from 'react';
import styled from 'styled-components';
import WithChildren from '../interfaces/WithChildren';

interface MenuContentProps extends WithChildren {
  /**
   * Number of selected item
   */
  numberOfSelectedMenuItem: number;
}

const MenuContentWrapper = styled.div<MenuContentProps>`
  background-color: var(--color-white);

  height: 100vh;
  overflow: scroll;
  width: calc(100vw - 372px);

  padding: 0;
  margin: 0;

  position: absolute;
  top: 0;
  right: ${props => props.numberOfSelectedMenuItem !== 0 ? 'calc(372px - 100vw)' : 'calc((372px - 100vw)*2 - 372px)'};
  z-index: 3;

  transition: ease-out .35s;
`;

/**
 * Menu component
 *
 * @param props - properties (menu selected items)
 */
function MenuContent(props: MenuContentProps): ReactElement {
  return (
    <MenuContentWrapper numberOfSelectedMenuItem={props.numberOfSelectedMenuItem}>
      { props.children }
    </MenuContentWrapper>
  );
}

export default MenuContent;
