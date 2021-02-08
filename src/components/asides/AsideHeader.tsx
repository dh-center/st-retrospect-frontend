import {ReactElement} from 'react';
import styled from 'styled-components';
import ApplicationLogo from '../ApplicationLogo';
import LanguageSwitch from '../LanguageSwitch';

const HeaderWrapper = styled.header`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-top: 19px;
  padding-bottom: 3px;

  border-bottom: 2px solid var(--color-dark-gray);
`;

/**
 * Header for asides
 */
function AsideHeader(): ReactElement {
  return (
    <HeaderWrapper>
      <ApplicationLogo/>
      <LanguageSwitch/>
    </HeaderWrapper>
  );
}

export default AsideHeader;
