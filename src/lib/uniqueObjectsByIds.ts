/**
 * Item in array
 */
interface ArrayItem {
  /**
   * Unique id field for filtering by
   */
  id: string;
}

/**
 * Returns array of unique objects by id field
 *
 * @param array - array for filtering
 */
export default function uniqueObjectsByIds<T extends ArrayItem>(array: T[]): T[] {
  return array.reduce<T[]>(
    (previous, current) => !previous.find(item => item.id === current.id) ? [...previous, current] : previous,
    []
  );
}
