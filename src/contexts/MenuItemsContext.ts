import React from 'react';

/**
 * Props of menu panels context
 */
interface MenuItemsContextProps {
  /**
   * Number of selected item
   */
  numberOfSelectedMenuItem: number;

  /**
   * Setter for selected item
   *
   * @param number - is menu show or not
   */
  setNumberOfSelectedMenuItem: (number: number) => void;
}

/**
 * Context with state of menu aside component
 */
const MenuItemsContext = React.createContext<MenuItemsContextProps>({
  numberOfSelectedMenuItem: 0,
  setNumberOfSelectedMenuItem: number => {
    return number;
  },
});

export default MenuItemsContext;
