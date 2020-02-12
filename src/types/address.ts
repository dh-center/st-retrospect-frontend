/**
 * Represents address info
 */
interface Address {
  /**
   * Address id
   */
  id: string;

  /**
   * Street on which the location is located
   */
  street?: string;

  /**
   * Build name
   */
  build?: string;

  /**
   * House number on the street
   */
  homeNumber?: string;

  /**
   * Corps of home
   */
  housing?: string;

  /**
   * Link for location info
   */
  link?: string;
}

export default Address;
