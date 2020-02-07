/**
 * Query for searching relations by search query
 */
// language=GraphQL
export const QUERY_FIND_RELATIONS = `
  query findLocations($searchString: String!) {
    search(searchString: $searchString) {
      location {
        id
        name
        mainPhotoLink
        latitude: coordinateX
        longitude: coordinateY
        addresses {
          street
          build
          homeNumber
          housing
        }
      }
      quote
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
    addresses {
      street
      build
      homeNumber
      housing
    }
  }
}
`;
