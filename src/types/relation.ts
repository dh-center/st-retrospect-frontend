import LocationInstance from '@/types/locationInstance';
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
   * LocationInstance in relation
   */
  locationInstance: LocationInstance;

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
