/**
 * Interface for sending selected items of custom select
 */
export interface OnChangeSelected {
  /**
   * onChange event handler
   *
   * @param values - all selected values
   */
  onChange?: (values: string[]) => void;
}
