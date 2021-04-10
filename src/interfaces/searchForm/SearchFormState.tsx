/**
 * Interface for search form values
 */
export interface SearchFormState {
  /**
   * GraphQL query for form
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
      left: string;
      /**
       * Right year value
       */
      right: string;
    }
  }
}
