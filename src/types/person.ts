import { MultilingualString } from '@/types/multilingualString';

/**
 * Represents person info
 */
interface Person {
  /**
   * Person id
   */
  id: string;

  /**
   * Person's lastname
   */
  lastName: MultilingualString;

  /**
   * Person's firstname
   */
  firstName: MultilingualString;

  /**
   * Person's patronymic
   */
  patronymic: MultilingualString;

  /**
   * Person's main photo
   */
  mainPhotoLink: string;

  /**
   * Person's description
   */
  description: MultilingualString;

  /**
   * Person's profession
   */
  profession: MultilingualString;

  /**
   * Person's birth date
   */
  birthDate: string;

  /**
   * Person's death date
   */
  deathDate: string;
}

export default Person;
