import { ReactElement, useContext } from 'react';
import LeftPanel from '../LeftPanel';
import AsideHeader from './AsideHeader';
import styled from 'styled-components';
import MenuAsideContext from '../../contexts/MenuAsideContext';
import DoubleArrowsIcon from '../../assets/double-arrows.svg';
import Menu from '../Menu';
import Overlay from '../Overlay';

const LeftPanelWithLargeShadow = styled(LeftPanel)`
  box-shadow: var(--shadow-large);
`;

const CloseMenuButton = styled.button`
  width: 24px;
  height: 24px;

  margin-left: 16px;

  border: none;
  outline: none;
  background: transparent url("${DoubleArrowsIcon}");
  background-size: cover;

  cursor: pointer;
`;

const AsideHeaderWithMarginBottom = styled(AsideHeader)`
  margin-bottom: 12px;
`;

/**
 * Aside panel with menu
 */
function MenuAside(): ReactElement {
  const { isMenuAsideShow, setMenuAsideShow } = useContext(MenuAsideContext);

  return (
    <>
      <Overlay show={isMenuAsideShow}/>
      <LeftPanelWithLargeShadow show={isMenuAsideShow}>
        <AsideHeaderWithMarginBottom>
          <CloseMenuButton onClick={() => setMenuAsideShow(!isMenuAsideShow)}/>
        </AsideHeaderWithMarginBottom>
        <Menu/>
      </LeftPanelWithLargeShadow>
    </>
  );
}

export default MenuAside;
