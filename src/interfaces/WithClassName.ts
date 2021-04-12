import { OnChangeSelected } from './searchForm/OnChangeSelected';

/**
 * Default interface with className prop
 */
interface WithClassName extends OnChangeSelected {
  /**
   * Component class name
   */
  className?: string;
}

export default WithClassName;
