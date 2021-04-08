import { ReactElement } from 'react';
import styled from 'styled-components';
import { sansSerifLight } from '../styles/FontStyles';
import HelpCircleIcon from '../assets/help-circle.svg';
import MapPinIcon from '../assets/map-pin.svg';
import UsersIcon from '../assets/users.svg';
import ThumbsUpIcon from '../assets/thumbs-up.svg';
import { useTranslation } from 'react-i18next';

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

  padding: 12px 16px;
  margin: 0 -16px;

  cursor: pointer;
  user-select: none;

  &:hover {
    background: var(--color-light-blue);
  }
`;

/**
 * Menu icon props
 */
interface MenuItemIconProps {
  /**
   * Displaying icon
   */
  icon: string;
}

const MenuItemIcon = styled.div<MenuItemIconProps>`
  height: 24px;
  width: 24px;

  margin-right: 18px;

  background-image: url("${ props => props.icon }");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

/**
 * Menu component
 */
function Menu(): ReactElement {
  const { t } = useTranslation();

  return (
    <MenuWrapper>
      <MenuItem>
        <MenuItemIcon icon={HelpCircleIcon}/>
        {t('aboutProject.title')}
      </MenuItem>
      <MenuItem>
        <MenuItemIcon icon={MapPinIcon}/>
        {t('howToGuide.title')}
      </MenuItem>
      <MenuItem>
        <MenuItemIcon icon={UsersIcon}/>
        {t('partners.title')}
      </MenuItem>
      <MenuItem>
        <MenuItemIcon icon={ThumbsUpIcon}/>
        {t('thanks.title')}
      </MenuItem>
    </MenuWrapper>
  );
}

export default Menu;
