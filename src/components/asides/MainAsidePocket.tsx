import { ReactElement, Suspense, useState } from 'react';
import MenuAsideContext from '../../contexts/MenuAsideContext';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import AsideHeader from './AsideHeader';
import MenuAside from './MenuAside';
import CustomSelect from '../customSelects/CustomSelect';
import LeftPanel from '../LeftPanel';
import MapIcon from '../../assets/map.svg';
import { Route, Switch } from 'react-router-dom';
import AsideParametersWrapper from './AsideParametersWrapper';
import MenuIcon from '../../assets/burger-menu.svg';
import RoutesList from '../RoutesList';
import SearchForm from '../SearchForm';
import RouteCard from '../RouteCard';
import Loader from '../Loader';
import RoutePassingRenderer from '../RoutePassingRenderer';
import SearchResultList from '../SearchResultList';
import LocationInstanceCard from '../LocationInstanceCard';
import PersonCard from '../PersonCard';
import LeftArrowIcon from '../../assets/arrow-left.svg';
import BottomSheet from '../BottomSheet';

const LeftPanelPositioned = styled(LeftPanel)`
  height: auto;
  width: 100vw;

  z-index: 4;

  position: absolute;
  top: 0;
  left: ${props => props.show ? '0' : '-100vw'};
  overflow-y: hidden;
`;

const BottomSheetWrapper = styled.div`
  height: 300px;
  padding: 44px 16px 0;

  background-color: #fff;
  z-index: 3;

  position: absolute;
  bottom: 0;
  overflow-y: auto;
`;

const AsideHeaderWithMarginBottom = styled(AsideHeader)`
  margin-bottom: 24px;
`;

const MenuButton = styled.button`
  height: 48px;
  width: 48px;
  margin-right: 24px;

  background: var(--color-white);
  background-image: url("${MenuIcon}");
  background-repeat: no-repeat;
  background-position: center;

  border-radius: 2px;
  box-shadow: var(--shadow-base);
  outline: none;
  border: none;
  cursor: pointer;
`;

const PositionRelativeWrapper = styled.div`
  position: relative;

  z-index: 1;
`;

/**
 * Props of hide search form button
 */
interface HideSearchFormButtonProps {
  /**
   * Is search form hidden
   */
  isOpen: boolean;
}

const HideSearchFormButton = styled.button<HideSearchFormButtonProps>`
  position: absolute;
  top: 100%;
  right: 0;

  height: 27px;

  border-radius: 0 0 2px 2px;
  border: none;
  outline: none;
  background: var(--color-white);
  box-shadow: var(--shadow-base);

  cursor: pointer;

  &::after {
    height: 24px;
    width: 24px;

    display: block;
    content: '';
    background-image: url("${LeftArrowIcon}");
    background-position: center center;
    background-repeat: no-repeat;

    transform: rotate(${ props => props.isOpen ? '90deg' : '-90deg' });

    transition: transform .2s ease-in-out;
  }
`;

const LineWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const CustomSelectWithMargin = styled(CustomSelect)`
  margin-top: 24px;
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

/**
 * Main aside component
 */
export default function MainAside(): ReactElement {
  const { t } = useTranslation();
  const [isMenuAsideShow, setMenuAsideShow] = useState(false);
  const [isSearchFormOpen, setSearchFormOpen] = useState(false);

  return (
    <>
      <LeftPanelPositioned show={true}>
        <MenuAsideContext.Provider value={{
          isMenuAsideShow,
          setMenuAsideShow,
        }}>
          <MenuAside/>
          <PositionRelativeWrapper>
            {/* Show button for hiding search form only when search form is rendering */}
            <Route exact path={['/', '/location-instance/:locationInstanceId', '/person/:personId']}>
              <HideSearchFormButton isOpen={isSearchFormOpen} onClick={() => setSearchFormOpen(!isSearchFormOpen)}/>
            </Route>
            <AsideParametersWrapper>
              <AsideHeaderWithMarginBottom
                isLanguageSwitchShow={true}
              />
              <Switch>
                <Route exact path={['/', '/location-instance/:locationInstanceId', '/person/:personId']}>
                  <SearchForm isSearchFormOpen={isSearchFormOpen}/>
                </Route>
                <Route path={['/routes', '/route/:questId']}>
                  <LineWrapper>
                    <MenuButton onClick={() => setMenuAsideShow(true)}/>
                    <MapBottomButtonIcon/>
                    { t('routes') }
                  </LineWrapper>
                  <Route path="/routes">
                    <CustomSelectWithMargin
                      selectedIds={[]}
                      values={[
                        {
                          id: '123',
                          value: 'писатель',
                        },
                        {
                          id: '1',
                          value: 'фантаст',
                        },
                        {
                          id: '2',
                          value: 'Золотой век',
                        },
                        {
                          id: '3',
                          value: 'Не золотой век',
                        },
                        {
                          id: '4',
                          value: 'Рома',
                        },
                      ]}
                    />
                  </Route>
                </Route>
              </Switch>
            </AsideParametersWrapper>
          </PositionRelativeWrapper>
        </MenuAsideContext.Provider>
      </LeftPanelPositioned>

      <BottomSheetWrapper>
        <BottomSheet>
          {/* Routes content */}
          <Switch>
            <Route path="/routes">
              <Suspense fallback={<Loader/>}>
                <RoutesList/>
              </Suspense>
            </Route>
            <Route exact path="/route/:questId">
              <Suspense fallback={<Loader/>}>
                <RouteCard/>
              </Suspense>
            </Route>
            <Route path="/route/:questId/:currentLocationIndex">
              <Suspense fallback={<Loader/>}>
                <RoutePassingRenderer/>
              </Suspense>
            </Route>
          </Switch>

          {/* Location instance content */}
          <Switch>
            <Route exact path="/">
              <Suspense fallback={<Loader/>}>
                <SearchResultList/>
              </Suspense>
            </Route>
            <Route path="/location-instance/:locationInstanceId">
              <Suspense fallback={<Loader/>}>
                <LocationInstanceCard/>
              </Suspense>
            </Route>
          </Switch>

          {/* Persons content */}
          <Switch>
            <Route path="/person/:personId">
              <Suspense fallback={<Loader/>}>
                <PersonCard/>
              </Suspense>
            </Route>
          </Switch>
        </BottomSheet>
      </BottomSheetWrapper>
    </>
  );
}
