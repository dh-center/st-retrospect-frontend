import { QUERY_FIND_LOCATION, QUERY_FIND_LOCATIONS } from './queries';
import * as api from '../index';
import Location from '@/types/location';

/**
 * Find locations by query and return information about them
 * @param searchString - query for searching
 */
export async function findLocations(searchString: string): Promise<Location[]> {
  return (await api.call(QUERY_FIND_LOCATIONS, { searchString })).search;
}

/**
 * Find location by it's ID
 * @param locationId - location id to search
 */
export async function findLocation(locationId: string): Promise<Location | null> {
  return (await api.call(QUERY_FIND_LOCATION, { locationId })).location;
}
