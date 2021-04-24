import { ReactElement } from 'react';
import styled from 'styled-components';
import WithChildren from '../interfaces/WithChildren';

interface MenuContentProps extends WithChildren {
  /**
   * Menu Content open state
   */
  isMenuContentShow: boolean;
}

const MenuContentWrapper = styled.div<MenuContentProps>`
  background-color: var(--color-white);

  display: inline-block;

  height: 100vh;
  overflow: scroll;
  width: calc(100vw - 372px);

  padding: 0;
  margin: 0;

  position: absolute;
  top: 0;
  right: ${props => props.isMenuContentShow ? 'calc(372px - 100vw)' : 'calc((372px - 100vw)*2)'};
  z-index: 3;

  transition: ease-out .3s;
`;

/**
 * Menu component
 *
 * @param props - properties (menu selected items)
 */
function MenuContent(props: MenuContentProps): ReactElement {
  return (
    <MenuContentWrapper isMenuContentShow={props.isMenuContentShow}>
      { props.children }
    </MenuContentWrapper>
  );
}

export default MenuContent;
