import {ReactElement} from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import {serifRegular} from '../styles/FontStyles';

const LogoLink = styled(NavLink)`
  ${ serifRegular };
  font-size: 36px;
  text-decoration: none;
  color: var(--color-dark-gray);

  user-select: none;
`;

/**
 * Application logo with link
 */
function ApplicationLogo(): ReactElement {
  return (
    <LogoLink to="/">St.Retrospect</LogoLink>
  );
}

export default ApplicationLogo;
