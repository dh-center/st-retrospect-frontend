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
  lastName: string;

  /**
   * Person's firstname
   */
  firstName: string;

  /**
   * Person's patronymic
   */
  patronymic: string;

  /**
   * Person's main photo
   */
  mainPhotoLink: string;

  /**
   * Person's description
   */
  description: string;

  /**
   * Person's profession
   */
  profession: string;

  /**
   * Person's birth date
   */
  birthDate: string;

  /**
   * Person's death date
   */
  deathDate: string;

  /**
   * Person's photos
   */
  photoLinks?: string[];
}

export default Person;
