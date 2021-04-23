import { ReactElement, useContext, useState } from 'react';
import LeftPanel from '../LeftPanel';
import AsideHeader from './AsideHeader';
import styled from 'styled-components';
import MenuAsideContext from '../../contexts/MenuAsideContext';
import DoubleArrowsIcon from '../../assets/double-arrows.svg';
import Menu from '../Menu';
import Overlay from '../Overlay';
import MenuContent from './../MenuContent';
import AboutProject from '../content/AboutProject';
import OurPartners from '../content/OurPartners';
import Thanks from '../content/Thanks';

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
  const [selectedMenuItem, setSelectedMenuItem] = useState<number>(0);
  const [isMenuContentShow, setMenuContentShow] = useState<boolean>(false);

  const SelectedContent = (): ReactElement => {
    if (!isMenuContentShow) {
      return (<></>);
    }

    switch (selectedMenuItem) {
      case 1:
        return (<AboutProject/>);
      case 2:
        return (<></>);
      case 3:
        return (<OurPartners/>);
      case 4:
        return (<Thanks/>);
    }

    return (<></>);
  };

  return (
    <>
      <Overlay show={isMenuAsideShow}/>
      <LeftPanelWithLargeShadow show={isMenuAsideShow}>
        <AsideHeaderWithMarginBottom>
          <CloseMenuButton onClick={() => {
            setMenuAsideShow(!isMenuAsideShow);
            setMenuContentShow(false);
          }}/>
        </AsideHeaderWithMarginBottom>
        <Menu onChange={(item) => {
          if (item === selectedMenuItem) {
            setMenuContentShow(false);
            setSelectedMenuItem(0);
          }
          if ((item !== selectedMenuItem) || (selectedMenuItem === 0)) {
            setMenuContentShow(true);
            setSelectedMenuItem(item);
          }
        }}/>
      </LeftPanelWithLargeShadow>
      <MenuContent isMenuContentShow={isMenuContentShow}>
        <SelectedContent/>
      </MenuContent>
    </>
  );
}

export default MenuAside;
