import { ReactElement } from 'react';
import styled from 'styled-components';
import { sansSerifLight } from '../styles/FontStyles';
import HelpCircleIcon from '../assets/help-circle.svg';
import MapPinIcon from '../assets/map-pin.svg';
import UsersIcon from '../assets/users.svg';
import ThumbsUpIcon from '../assets/thumbs-up.svg';
import { useTranslation } from 'react-i18next';

interface MenuInputProps {
  /**
   * onChange event handler
   *
   * @param item - number of the pressed button
   */
  onClick: (item: number) => void;
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
 * @param props - onChange event handler for tracking selected menu item
 */
function Menu(props: MenuInputProps): ReactElement {
  const { t } = useTranslation();

  return (
    <>
      <MenuWrapper>
        <MenuItem onClick={() => props.onClick(1)}>
          <MenuItemIcon icon={HelpCircleIcon}/>
          {t('aboutProject.title')}
        </MenuItem>
        <MenuItem onClick={() => props.onClick(2)}>
          <MenuItemIcon icon={MapPinIcon}/>
          {t('howToGuide.title')}
        </MenuItem>
        <MenuItem onClick={() => props.onClick(3)}>
          <MenuItemIcon icon={UsersIcon}/>
          {t('partners.title')}
        </MenuItem>
        <MenuItem onClick={() => props.onClick(4)}>
          <MenuItemIcon icon={ThumbsUpIcon}/>
          {t('thanks.title')}
        </MenuItem>
      </MenuWrapper>
    </>
  );
}

export default Menu;
