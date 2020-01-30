import Location from '@/types/location';
import * as api from '@/api';
import { QUERY_LOCATION_COORDINATES } from '@/api/locations/queries';

/**
 * Find location coordinates by it's ID
 * @param locationId - location id to search
 */
export async function getLocationCoordinates(locationId: string): Promise<Location | null> {
  return (await api.call(QUERY_LOCATION_COORDINATES, { locationId })).location;
}
