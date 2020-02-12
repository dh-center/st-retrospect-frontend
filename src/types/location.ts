import Address from '@/types/address';
import LocationType from '@/types/locationType';
import { MultilingualString } from '@/types/multilingualString';
import Relation from '@/types/relation';

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
  name: string;

  /**
   * Main location image
   */
  mainPhotoLink?: string;

  /**
   * Location photos
   */
  photoLinks?: [string];

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
  description?: string;

  /**
   * Array of addresses of location
   */
  addresses?: [Address];

  /**
   * Array of location's types
   */
  locationTypes?: [LocationType];

  /**
   * Array of location relations
   */
  relations?: [Relation];
}

export default Location;
