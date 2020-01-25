/**
 * Query for searching locations by search query
 */
// language=GraphQL
export const QUERY_FIND_LOCATIONS = `
  query findLocations($searchString: String!) {
    search(searchString: $searchString) {
      id
      name
      mainPhotoLink
      latitude: coordinateX
      longitude: coordinateY
    }
  }
`;
