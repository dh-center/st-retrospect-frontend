import { MultilingualString } from '@/types/multilingualString';

/**
 * Represents location type info
 */
interface LocationType {
  /**
   * Location type id
   */
  id: string;

  /**
   * Location type name
   */
  name: MultilingualString;
}

export default LocationType;
