import { ReactElement } from 'react';
import styled from 'styled-components';
import { sansSerifLight } from '../styles/FontStyles';
import HelpCircleIcon from '../assets/help-circle.svg';
import MapPinIcon from '../assets/map-pin.svg';
import UsersIcon from '../assets/users.svg';
import ThumbsUpIcon from '../assets/thumbs-up.svg';
import { useTranslation } from 'react-i18next';
import { MenuItems } from './asides/MenuAside';

/**
 * Props of component
 */
interface MenuProps {
  /**
   * onClick event handler
   *
   * @param item - selected menu item
   */
  onClick: (item: MenuItems) => void;
}

const MenuWrapper = styled.ul`
  display: inline-block;

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
 *
 * @param props - props of component
 */
function Menu(props: MenuProps): ReactElement {
  const { t } = useTranslation();

  return (
    <>
      <MenuWrapper>
        <MenuItem onClick={() => props.onClick(MenuItems.ABOUT_PROJECT)}>
          <MenuItemIcon icon={HelpCircleIcon}/>
          {t('aboutProject.title')}
        </MenuItem>
        <MenuItem onClick={() => console.log('How to guide')}>
          <MenuItemIcon icon={MapPinIcon}/>
          {t('howToGuide.title')}
        </MenuItem>
        <MenuItem onClick={() => props.onClick(MenuItems.OUR_PARTNERS)}>
          <MenuItemIcon icon={UsersIcon}/>
          {t('partners.title')}
        </MenuItem>
        <MenuItem onClick={() => props.onClick(MenuItems.THANKS)}>
          <MenuItemIcon icon={ThumbsUpIcon}/>
          {t('thanks.title')}
        </MenuItem>
      </MenuWrapper>
    </>
  );
}

export default Menu;
