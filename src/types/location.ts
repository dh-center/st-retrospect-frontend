/**
 * location
 */
interface Location {
  id: string;
  name: MultStr;
  mainPhotoLink: string;
}

export default Location;

export interface MultStr {
  [key: string]: string | null
}
