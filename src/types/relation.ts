import Location from '@/types/location';
import { MultilingualString } from '@/types/multilingualString';

/**
 * Represents relation info
 */
interface Relation {
  /**
   * Relation id
   */
  id: string;

  /**
   * Location in relation
   */
  location: Location;

  /**
   * Relation's quote
   */
  quote: MultilingualString;
}

export default Relation;
