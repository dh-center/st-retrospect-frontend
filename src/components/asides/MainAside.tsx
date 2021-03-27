import { ReactElement, useState } from 'react';
import LeftPanel from '../LeftPanel';
import AsideCloseButton from './AsideCloseButton';
import styled from 'styled-components';
import AsideHeader from './AsideHeader';
import SearchLine from '../SearchLine';
import MenuAside from './MenuAside';
import MenuAsideContext from '../../contexts/MenuAsideContext';
import CustomSelect from '../CustomSelect';
import CustomRange from '../CustomRange';
import { useTranslation } from 'react-i18next';

const AsideCloseButtonPositioned = styled(AsideCloseButton)`
  position: absolute;
  top: 16px;
  right: -48px;
`;

const AsideHeaderWithMarginBottom = styled(AsideHeader)`
  margin-bottom: 12px;
`;

const SearchLineWithMarginBottom = styled(SearchLine)`
  margin-bottom: 12px;
`;

/**
 * Main aside component
 */
function MainAside(): ReactElement {
  const { t } = useTranslation();
  const [showAside, setShowAside] = useState(true);
  const [isMenuAsideShow, setMenuAsideShow] = useState(false);

  return (
    <LeftPanel show={showAside}>
      <MenuAsideContext.Provider value={{
        isMenuAsideShow,
        setMenuAsideShow,
      }}>
        <MenuAside/>
        <AsideCloseButtonPositioned
          willClose={showAside}
          onClick={() => setShowAside(!showAside)}
        />
        <AsideHeaderWithMarginBottom/>
        <SearchLineWithMarginBottom/>
        <CustomSelect/>
        {/* @todo unmock variables*/}
        <CustomRange
          min={'1500'}
          max={'2021'}
          label={t(`customRange.years`)}
        />
        Next elements for test
      </MenuAsideContext.Provider>
    </LeftPanel>
  );
}

export default MainAside;
