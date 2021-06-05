import { ReactElement, ReactNode, useContext, useState } from 'react';
import LeftPanel from '../LeftPanel';
import AsideHeader from './AsideHeader';
import styled from 'styled-components';
import MenuAsideContext from '../../contexts/MenuAsideContext';
import DoubleArrowsIcon from '../../assets/double-arrows.svg';
import Menu from '../Menu';
import Overlay from '../Overlay';
import AboutProject from '../menuContent/AboutProject';
import OurPartners from '../menuContent/OurPartners';
import Thanks from '../menuContent/Thanks';
import useBreakpoint from '../../lib/useBreakpoint';

const LeftPanelWithLargeShadow = styled(LeftPanel)`
  box-shadow: var(--shadow-large);

  @media(max-width: 768px) {
    width: 272px;
    left: ${props => props.show ? '0' : '-272px'};
  }
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
 * Possible menu items in content
 */
export enum MenuItems {
  THANKS='THANKS',
  ABOUT_PROJECT='ABOUT_PROJECT',
  OUR_PARTNERS='OUR_PARTNERS'
}

/**
 * Props of MenuContentWrapper
 */
interface MenuContentWrapperProps {
  /**
   * Is menu content show
   */
  isMenuContentShow: boolean
}

const MenuContentWrapper = styled.div<MenuContentWrapperProps>`
  position: fixed;
  top: 0;
  left: ${props => props.isMenuContentShow ? '372px' : '100vw'};

  height: 100vh;
  width: calc(100vw - 372px);

  background-color: var(--color-white);
  box-shadow: var(--shadow-large);
  transition: ease-out .35s;

  overflow-y: auto;
  z-index: 4;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

/**
 * Aside panel with menu
 */
export default function MenuAside(): ReactElement {
  const { isMenuAsideShow, setMenuAsideShow } = useContext(MenuAsideContext);
  const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItems>(MenuItems.ABOUT_PROJECT);
  const [isMenuContentShow, setMenuContentShow] = useState(false);
  const breakpoint = useBreakpoint();

  const selectedMenuItemContent = (): ReactNode => {
    switch (selectedMenuItem) {
      case MenuItems.ABOUT_PROJECT:
        return <AboutProject/>;
      case MenuItems.THANKS:
        return <Thanks/>;
      case MenuItems.OUR_PARTNERS:
        return <OurPartners/>;
    }
  };

  return (
    <>
      <Overlay show={isMenuAsideShow}/>
      <LeftPanelWithLargeShadow show={isMenuAsideShow}>
        <AsideHeaderWithMarginBottom
          isLanguageSwitchShow={!breakpoint.isSm}
        >
          <CloseMenuButton onClick={() => {
            setMenuAsideShow(!isMenuAsideShow);
            setMenuContentShow(false);
          }}/>
        </AsideHeaderWithMarginBottom>
        <Menu onClick={item => {
          if (item === selectedMenuItem && isMenuContentShow) {
            setMenuContentShow(false);

            return;
          }
          setSelectedMenuItem(item);
          setMenuContentShow(true);
        }}/>
      </LeftPanelWithLargeShadow>
      <MenuContentWrapper isMenuContentShow={isMenuContentShow}>
        {selectedMenuItemContent()}
      </MenuContentWrapper>
    </>
  );
}
