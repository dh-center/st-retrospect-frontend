import { ReactElement } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { serifRegular } from '../styles/FontStyles';
import WithClassName from '../interfaces/WithClassName';

/**
 * Props of application logo component
 */
interface ApplicationLogoProps extends WithClassName {}

const LogoLink = styled(NavLink)`
  ${ serifRegular };
  font-size: 36px;
  text-decoration: none;
  color: var(--color-dark-gray);

  user-select: none;
`;

/**
 * Application logo with link
 *
 * @param props - props of component
 */
function ApplicationLogo(props: ApplicationLogoProps): ReactElement {
  return (
    <LogoLink to="/" className={props.className}>St.Retrospect</LogoLink>
  );
}

export default ApplicationLogo;
