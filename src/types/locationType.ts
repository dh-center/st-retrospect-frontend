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

/**
 * Object storing strings in different languages
 */
export interface MultilingualString {
  [key: string]: string | null;
}
