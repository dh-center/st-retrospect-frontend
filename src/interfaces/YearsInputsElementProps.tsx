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
   * Minimum year for searching
   */
  min: string;

  /**
   * Maximum year for searching
   */
  max: string;

  /**
   * Left value of range
   */
  left: string;

  /**
   * Right value of range
   */
  right: string;

  /**
   * Label for range input
   */
  label?: string;
}
