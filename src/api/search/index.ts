import { QUERY_FIND_LOCATION, QUERY_FIND_RELATIONS, QUERY_FIND_PERSON } from './queries';
import * as api from '../index';
import LocationInstance from '@/types/locationInstance';
import Person from '@/types/person';
import Relation from '@/types/relation';

/**
 * Find locations by query and return information about them
 * @param searchString - query for searching
 */
export async function findRelations(searchString: string): Promise<Relation[]> {
  return (await api.call(QUERY_FIND_RELATIONS, { searchString })).search;
}

/**
 * Find location by it's ID
 * @param locationId - location id to search
 */
export async function findLocation(locationId: string): Promise<LocationInstance | null> {
  return (await api.call(QUERY_FIND_LOCATION, { locationId })).location;
}

/**
 * Find person by it's ID
 * @param personId - person id to search
 */
export async function findPerson(personId: string): Promise<Person | null> {
  return (await api.call(QUERY_FIND_PERSON, { personId })).person;
}
