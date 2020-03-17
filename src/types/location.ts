import Address from '@/types/address';
import LocationInstance from '@/types/locationInstance';

/**
 * Represents location info
 */
interface Location {
  /**
   * Id of location
   */
  id: string;

  /**
   * Latitude of location
   */
  latitude: number;

  /**
   * Longitude of location
   */
  longitude: number;

  /**
   * Array of addresses of location
   */
  addresses: Address[];

  /**
   * Possible location representations
   */
  instances: LocationInstance[];
}

export default Location;
