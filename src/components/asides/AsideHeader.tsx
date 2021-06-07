import { ReactElement } from 'react';
import styled from 'styled-components';
import ApplicationLogo from '../ApplicationLogo';
import LanguageSwitch from '../LanguageSwitch';
import WithClassName from '../../interfaces/WithClassName';
import WithChildren from '../../interfaces/WithChildren';
import { Route, Switch, useHistory } from 'react-router';
import MapIconBlue from '../../assets/map-blue.svg';
import SearchIconBlue from '../../assets/search-blue.svg';
import useBreakpoint from '../../lib/useBreakpoint';

/**
 * AsideHeader component props
 */
interface AsideHeaderProps extends WithClassName, WithChildren {
  isLanguageSwitchShow: boolean;
}

const HeaderWrapper = styled.header`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-top: 19px;
  padding-bottom: 3px;

  border-bottom: 2px solid var(--color-dark-gray);
`;

const ApplicationLogoWithFlex = styled(ApplicationLogo)`
  flex: 1;
`;

const ButtonIcon = styled.div`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  box-sizing: border-box;

  margin-right: 15px;

  &:hover {
    cursor: pointer;
  }
`;

const MapButtonIcon = styled(ButtonIcon)`
  width: 26px;
  height: 22px;

  background-image: url("${MapIconBlue}");
`;

const SearchButtonIcon = styled(ButtonIcon)`
  width: 24px;
  height: 24px;

  background-image: url("${SearchIconBlue}");
`;

/**
 * Header for asides
 *
 * @param props - props of component
 */
function AsideHeader(props: AsideHeaderProps): ReactElement {
  const breakpoint = useBreakpoint();
  const history = useHistory();

  return (
    <HeaderWrapper className={props.className}>
      <ApplicationLogoWithFlex/>
      { (props.isLanguageSwitchShow && breakpoint.isPocket) && <Switch>
        <Route exact path="/">
          <MapButtonIcon onClick={() => history.push('/routes')}/>
        </Route>
        <Route path="/routes">
          <SearchButtonIcon onClick={() => history.push('/')}/>
        </Route>
      </Switch> }
      { props.isLanguageSwitchShow && <LanguageSwitch/> }
      {props.children}
    </HeaderWrapper>
  );
}

export default AsideHeader;
