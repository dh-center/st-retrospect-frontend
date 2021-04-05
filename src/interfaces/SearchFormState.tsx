/**
 * Interface for search form values
 */
export interface SearchYearsValues {
  /**
   * GraphQL query
   */
  query: string;
  /**
   * Filters from form fields
   */
  filters: {
    /**
     * Categories from selector
     */
    categories: string[];
    /**
     * Years values
     */
    years: {
      /**
       * Left year value
       */
      left: number;
      /**
       * Right year value
       */
      right: number;
    }
  }
}
