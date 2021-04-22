import { ReactElement } from 'react';
import styled from 'styled-components';

interface MenuContentProps {
  /**
   * Number of selected menu item (0 - never selected)
   */
  selectedMenuItem: number;
}

const MenuContentWrapper = styled.div<MenuContentProps>`
  background-color: red;

  display: inline-block;

  height: 100vh;
  width: calc(100vw - 372px);

  padding: 0;
  margin: 0;

  position: absolute;
  top: 0;
  right: ${props => (props.selectedMenuItem !== 0) ? 'calc(372px - 100vw)' : 'calc((372px - 100vw)*2)'};
  z-index: 3;

  transition: right ease-out .5s;
`;

/**
 * Menu component
 *
 * @param props - properties (menu selected items)
 */
function MenuContent(props: MenuContentProps): ReactElement {

  return (
    <>
      { (props.selectedMenuItem !== 0) &&
        <MenuContentWrapper selectedMenuItem={props.selectedMenuItem}>
          <>
            { (props.selectedMenuItem === 1) && <>About Project</> }
            { (props.selectedMenuItem === 2) && <>How to use map?</> }
            { (props.selectedMenuItem === 3) && <>Our partners</> }
            { (props.selectedMenuItem === 4) && <>Thanks</> }
          </>
        </MenuContentWrapper>
      }
    </>
  );
}

export default MenuContent;
