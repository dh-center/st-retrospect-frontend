/**
 * Query for searching location coordinates by it's ID
 */
// language=GraphQL
export const QUERY_LOCATION_COORDINATES = `
  query locationCoordinates($locationId: ID!) {
    location(id: $locationId) {
      latitude: coordinateX
      longitude: coordinateY
    }
  }
`;
