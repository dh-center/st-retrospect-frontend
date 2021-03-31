import { ReactElement, useState } from 'react';
import MenuAsideContext from '../../contexts/MenuAsideContext';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import AsideCloseButton from './AsideCloseButton';
import AsideHeader from './AsideHeader';
import MenuAside from './MenuAside';
import CustomSelect from '../CustomSelect';
import LeftPanel from '../LeftPanel';
import SearchLine from '../SearchLine';
import CustomRange from '../CustomRange';
import YearsInputs from '../YearsInputs';
import AsideBottomButton from './AsideBottomButton';
import MapIcon from '../../assets/map.svg';
import SearchIcon from '../../assets/search.svg';
import { Route, Switch, useHistory } from 'react-router-dom';
import AsideParametersWrapper from './AsideParametersWrapper';

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

const BottomButton = styled(AsideBottomButton)`
  margin-top: auto;
`;

const BottomButtonIcon = styled.div`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  margin-right: 8px;
`;

const MapBottomButtonIcon = styled(BottomButtonIcon)`
  width: 26px;
  height: 22px;

  background-image: url("${MapIcon}");
`;

const SearchBottomButtonIcon = styled(BottomButtonIcon)`
  width: 24px;
  height: 24px;

  background-image: url("${SearchIcon}");
`;

/**
 * Main aside component
 */
function MainAside(): ReactElement {
  const { t } = useTranslation();
  const [showAside, setShowAside] = useState(true);
  const [isMenuAsideShow, setMenuAsideShow] = useState(false);
  const history = useHistory();

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
        <AsideParametersWrapper>
          <AsideHeaderWithMarginBottom/>
          <Switch>
            <Route exact path="/">
              <SearchLineWithMarginBottom/>
              <CustomSelect/>
              {/* @todo unmock variables*/}
              <CustomRange
                min={'1500'}
                max={'2021'}
                label={t(`customRange.years`)}
              />
              <YearsInputs
                min={'1500'}
                max={'2021'}
              />
            </Route>
            <Route path="/routes">
              Здесь могли быть параметры маршрутов
            </Route>
          </Switch>
        </AsideParametersWrapper>

        <Switch>
          <Route exact path="/">
            <BottomButton onClick={() => history.push('/routes')}>
              <MapBottomButtonIcon/>
              {t('aside.routesBottomButton')}
            </BottomButton>
          </Route>
          <Route path="/routes">
            <BottomButton onClick={() => history.push('/')}>
              <SearchBottomButtonIcon/>
              {t('aside.searchBottomButton')}
            </BottomButton>
          </Route>
        </Switch>
      </MenuAsideContext.Provider>
    </LeftPanel>
  );
}

export default MainAside;
