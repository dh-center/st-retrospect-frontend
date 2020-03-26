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
 * Query for searching location instance by it's ID
 */
// language=GraphQL
export const QUERY_FIND_LOCATION_INSTANCE = `
query locationInstance($locationInstanceId: ID!) {
  locationInstance(id: $locationInstanceId) {
    id
    name
    mainPhotoLink
    photoLinks
    description
    demolitionDate
    constructionDate
    wikiLink
    location {
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
    relations {
      person {
        id
        lastName
        firstName
        patronymic
        mainPhotoLink
      }
    }
    architects {
      lastName
      firstName
      patronymic
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
