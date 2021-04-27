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
   * @param item - is menu show or not
   */
  setNumberOfSelectedMenuItem: (item: number) => void;
}

/**
 * Context with state of menu aside component
 */
const MenuItemsContext = React.createContext<MenuItemsContextProps>({
  numberOfSelectedMenuItem: 0,
  setNumberOfSelectedMenuItem: item => {
    return item;
  },
});

export default MenuItemsContext;
