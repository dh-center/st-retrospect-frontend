/**
 * Represents location info
 */
interface Location {
  /**
   * Location id
   */
  id: string;

  /**
   * Location name
   */
  name: MultilingualString;

  /**
   * Main location image
   */
  mainPhotoLink: string;
}

export default Location;

/**
 * Object storing strings in different languages
 */
export interface MultilingualString {
  [key: string]: string | null;
}
