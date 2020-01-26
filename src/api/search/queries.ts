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

/**
 * Query for searching location by it's ID
 */
// language=GraphQL
export const QUERY_FIND_LOCATION = `
query location($locationId: ID!) {
  location(id: $locationId) {
    id
    name
    mainPhotoLink
    description
    demolitionDate
    constructionDate
  }
}
`;
