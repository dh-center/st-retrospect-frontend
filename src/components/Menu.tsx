import { ReactElement } from 'react';
import styled from 'styled-components';
import { sansSerifLight } from '../styles/FontStyles';
import HelpCircleIcon from '../assets/help-circle.svg';
import MapPinIcon from '../assets/map-pin.svg';
import UsersIcon from '../assets/users.svg';
import ThumbsUpIcon from '../assets/thumbs-up.svg';

const MenuWrapper = styled.ul`
  padding: 0;
  margin: 0;

  list-style-type: none;
`;

const MenuItem = styled.li`
  display: flex;
  align-items: center;

  ${ sansSerifLight };
  color: var(--color-dark-gray);
  font-size: 14px;

  padding: 12px 0;

  cursor: pointer;
  user-select: none;
`;

const MenuItemIcon = styled.div`
  height: 24px;
  width: 24px;

  margin-right: 18px;
`;

const AboutProjectIcon = styled(MenuItemIcon)`
  background-image: url("${HelpCircleIcon}");
  background-size: cover;
`;

const HowToIcon = styled(MenuItemIcon)`
  background-image: url("${MapPinIcon}");
  background-size: cover;
`;

const OurPartnersIcon = styled(MenuItemIcon)`
  background-image: url("${UsersIcon}");
  background-size: cover;
`;

const ThanksIcon = styled(MenuItemIcon)`
  background-image: url("${ThumbsUpIcon}");
  background-size: cover;
`;

/**
 *
 */
function Menu(): ReactElement {
  return (
    <MenuWrapper>
      <MenuItem>
        <AboutProjectIcon/>
        О проекте
      </MenuItem>
      <MenuItem>
        <HowToIcon/>
        Как пользоваться картой?
      </MenuItem>
      <MenuItem>
        <OurPartnersIcon/>
        Наши партнёры
      </MenuItem>
      <MenuItem>
        <ThanksIcon/>
        Благодарности
      </MenuItem>
    </MenuWrapper>
  );
}

export default Menu;
