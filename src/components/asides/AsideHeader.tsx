import { ReactElement } from 'react';
import styled from 'styled-components';
import ApplicationLogo from '../ApplicationLogo';
import LanguageSwitch from '../LanguageSwitch';

/**
 * AsideHeader component props
 */
interface AsideHeaderProps {
  /**
   * Component class name
   */
  className?: string;
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

/**
 * Header for asides
 *
 * @param props - props of component
 */
function AsideHeader(props: AsideHeaderProps): ReactElement {
  return (
    <HeaderWrapper className={props.className}>
      <ApplicationLogo/>
      <LanguageSwitch/>
    </HeaderWrapper>
  );
}

export default AsideHeader;
