import Address from '@/types/address';
import LocationType from '@/types/locationType';

/**
 * Represents location info
 */

interface Location {
  /**
   * Location id
   */
  id: string;

  /**
   * Location name
   */
  name: MultilingualString;

  /**
   * Main location image
   */
  mainPhotoLink?: string;

  /**
   * Location's latitude on map
   */
  latitude?: number;

  /**
   * Location's longitude on map
   */
  longitude?: number;

  /**
   * Location's construction date
   */
  constructionDate?: string;

  /**
   * Location's demolition date
   */
  demolitionDate?: string;

  /**
   * Location's description
   */
  description?: MultilingualString;

  /**
   * Array of addresses of location
   */
  addresses?: [Address];

  /**
   * Array of location's types
   */
  locationTypes?: [LocationType];
}

export default Location;

/**
 * Object storing strings in different languages
 */
export interface MultilingualString {
  [key: string]: string | null;
}
