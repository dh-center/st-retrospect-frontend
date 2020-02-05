import Location from '@/types/location';

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

/**
 * Object storing strings in different languages
 */
export interface MultilingualString {
  [key: string]: string | null;
}
