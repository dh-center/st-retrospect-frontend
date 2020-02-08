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
}

export default Person;
