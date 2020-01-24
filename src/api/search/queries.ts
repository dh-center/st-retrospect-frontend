/**
 * Query for searching locations by search query
 */
// language=GraphQL
export const QUERY_FIND_LOCATIONS = `
  query findLocations($searchString: string!) {
    search(searchString: $searchString) {
      id,
      name,
      mainPhotoLink
    }
  }
`;
