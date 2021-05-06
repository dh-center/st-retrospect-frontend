import React from 'react';

/**
 * Props of menu aside context
 */
interface MenuAsideContextProps {
  /**
   * Is menu show or not
   */
  isMenuAsideShow: boolean;

  /**
   * Setter for menu status
   *
   * @param isShow - is menu show or not
   */
  setMenuAsideShow: (isShow: boolean) => void;
}

/**
 * Context with state of menu aside component
 */
const MenuAsideContext = React.createContext<MenuAsideContextProps>({
  isMenuAsideShow: false,
  setMenuAsideShow: isShow => {
    return isShow;
  },
});

export default MenuAsideContext;
