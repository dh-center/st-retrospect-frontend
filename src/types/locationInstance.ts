import LocationType from '@/types/locationType';
import Relation from '@/types/relation';
import Location from '@/types/location';
import Person from '@/types/person';

/**
 * Represents location info
 */
interface LocationInstance {
  /**
   * LocationInstance id
   */
  id: string;

  /**
   * LocationInstance name
   */
  name: string;

  /**
   * Location for displaying on map and making relations with persons
   */
  location: Location;

  /**
   * Main location image
   */
  mainPhotoLink?: string;

  /**
   * LocationInstance photos
   */
  photoLinks?: string[];

  /**
   * LocationInstance's construction date
   */
  constructionDate?: string;

  /**
   * LocationInstance's demolition date
   */
  demolitionDate?: string;

  /**
   * LocationInstance's description
   */
  description?: string;

  /**
   * Array of location's types
   */
  locationTypes?: LocationType[];

  /**
   * Array of location relations
   */
  relations?: Relation[];

  /**
   * Array of architects for location
   */
  architects?: Person[];

  /**
   * Wikipedia link to source
   */
  wikiLink: string;
}

export default LocationInstance;
