import Location from '@/types/location';
import Person from '@/types/person';

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
   * Person in relation
   */
  person: Person

  /**
   * Relation's quote
   */
  quote: string;
}

export default Relation;
