import { ReactElement, useContext } from 'react';
import LeftPanel from '../LeftPanel';
import AsideHeader from './AsideHeader';
import styled from 'styled-components';
import MenuAsideContext from '../../contexts/MenuAsideContext';

const LeftPanelWithLargeShadow = styled(LeftPanel)`
  box-shadow: var(--shadow-large);
`;

/**
 * Aside panel with menu
 */
function MenuAside(): ReactElement {
  const { isMenuAsideShow, setMenuAsideShow } = useContext(MenuAsideContext);

  return (
    <LeftPanelWithLargeShadow show={isMenuAsideShow}>
      <AsideHeader/>
      Menu aside
      <button onClick={() => setMenuAsideShow(!isMenuAsideShow)}>Hide menu</button>
    </LeftPanelWithLargeShadow>
  );
}

export default MenuAside;
