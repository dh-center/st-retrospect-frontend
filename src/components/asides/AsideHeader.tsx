import { ReactElement } from 'react';
import styled from 'styled-components';
import ApplicationLogo from '../ApplicationLogo';
import LanguageSwitch from '../LanguageSwitch';
import WithClassName from '../../interfaces/WithClassName';
import WithChildren from '../../interfaces/WithChildren';

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
      { (props.isLanguageSwitchShow && breakpoint.isSm) && <Switch>
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
