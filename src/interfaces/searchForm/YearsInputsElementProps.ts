import { SearchYearsValues } from './SearchYearsValues';

/**
 * Interface of props for search components
 */
export interface YearsInputsElementProps {
  /**
   * onChange event handler
   *
   * @param values - end values of years
   */
  onChange?: (values: SearchYearsValues) => void;

  /**
   * Current years values
   */
  values: SearchYearsValues;

  /**
   * Minimum year for searching
   */
  min: string;

  /**
   * Maximum year for searching
   */
  max: string;
}
