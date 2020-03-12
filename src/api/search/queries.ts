/**
 * Query for searching relations by search query
 */
// language=GraphQL
export const QUERY_FIND_RELATIONS = `
  query findLocations($searchString: String!) {
    search(searchString: $searchString) {
      locationInstance {
        id
        name
        mainPhotoLink
        location {
          latitude: coordinateX
          longitude: coordinateY
          addresses {
            street
            build
            homeNumber
            housing
          }
        }
        locationTypes {
          name
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
    photoLinks
    description
    demolitionDate
    constructionDate
    addresses {
      street
      build
      homeNumber
      housing
    }
    locationTypes {
      name
    }
    relations {
      person {
        id
        lastName
        firstName
        patronymic
        mainPhotoLink
      }
    }
  }
}
`;

/**
 * Query for searching person by it's ID
 */
// language=GraphQL
export const QUERY_FIND_PERSON = `
query person($personId: ID!) {
  person(id: $personId) {
    id
    lastName
    firstName
    patronymic
    mainPhotoLink
    photoLinks
    description
    profession
    birthDate
    deathDate
  }
}
`;
