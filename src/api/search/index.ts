import { QUERY_FIND_LOCATIONS } from './queries';
import * as api from '../index';
import Location from '@/types/location';

/**
 * Find locations by query and return information about them
 * @param {String} searchString - query for searching
 * @return {Promise<Location[]>}
 */
export async function findLocations(searchString: string): Promise<Location[]> {
  return (await api.call(QUERY_FIND_LOCATIONS, searchString)).findLocations;
}
