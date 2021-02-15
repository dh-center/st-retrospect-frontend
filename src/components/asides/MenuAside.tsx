import { ReactElement, useContext } from 'react';
import LeftPanel from '../LeftPanel';
import AsideHeader from './AsideHeader';
import styled from 'styled-components';
import MenuAsideContext from '../../contexts/MenuAsideContext';
import DoubleArrowsIcon from '../../assets/double-arrows.svg';

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

/**
 * Aside panel with menu
 */
function MenuAside(): ReactElement {
  const { isMenuAsideShow, setMenuAsideShow } = useContext(MenuAsideContext);

  return (
    <LeftPanelWithLargeShadow show={isMenuAsideShow}>
      <AsideHeader>
        <CloseMenuButton onClick={() => setMenuAsideShow(!isMenuAsideShow)}/>
      </AsideHeader>
    </LeftPanelWithLargeShadow>
  );
}

export default MenuAside;
