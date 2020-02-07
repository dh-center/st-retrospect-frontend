import { MultilingualString } from '@/types/multilingualString';

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
  street?: MultilingualString;

  /**
   * Build name
   */
  build?: MultilingualString;

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
