/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type SearchInput = {
    query: string;
    startYear?: number | null;
    endYear?: number | null;
    tagIds?: Array<string> | null;
    skip: number;
    first: number;
};
export type SearchResultListQueryVariables = {
    input: SearchInput;
};
export type SearchResultListQueryResponse = {
    readonly relationsByPersonSearch: {
        readonly nodes: ReadonlyArray<{
            readonly locationInstance: {
                readonly id: string;
                readonly " $fragmentRefs": FragmentRefs<"LocationInstanceItem_locationInstance" | "LocationInstanceRelationsPopup_data">;
            };
            readonly person: {
                readonly id: string;
                readonly " $fragmentRefs": FragmentRefs<"PersonItem_person">;
            };
        }>;
    };
};
export type SearchResultListQuery = {
    readonly response: SearchResultListQueryResponse;
    readonly variables: SearchResultListQueryVariables;
};



/*
query SearchResultListQuery(
  $input: SearchInput!
) {
  relationsByPersonSearch(input: $input) {
    nodes {
      locationInstance {
        id
        ...LocationInstanceItem_locationInstance
        ...LocationInstanceRelationsPopup_data
      }
      person {
        id
        ...PersonItem_person
      }
      id
    }
  }
}

fragment LocationInstanceItem_locationInstance on LocationInstance {
  id
  mainPhotoLink
  name
  location {
    addresses {
      address
    }
    id
  }
}

fragment LocationInstanceRelationsPopup_data on LocationInstance {
  location {
    longitude
    latitude
    id
  }
  name
  relations {
    ...RelationCard_relation
    id
  }
}

fragment PersonItem_person on Person {
  id
  lastName
  firstName
  patronymic
  mainPhotoLink
}

fragment RelatedPersonBlock_person on Person {
  id
  lastName
  firstName
  patronymic
  mainPhotoLink
}

fragment RelationCard_relation on Relation {
  person {
    ...RelatedPersonBlock_person
    id
  }
  startDate
  endDate
  quote
  relationType {
    id
    name
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "mainPhotoLink",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "concreteType": "Person",
  "kind": "LinkedField",
  "name": "person",
  "plural": false,
  "selections": [
    (v2/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "lastName",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "firstName",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "patronymic",
      "storageKey": null
    },
    (v3/*: any*/)
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SearchResultListQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "RelationsSearchResult",
        "kind": "LinkedField",
        "name": "relationsByPersonSearch",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Relation",
            "kind": "LinkedField",
            "name": "nodes",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "LocationInstance",
                "kind": "LinkedField",
                "name": "locationInstance",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "LocationInstanceItem_locationInstance"
                  },
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "LocationInstanceRelationsPopup_data"
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Person",
                "kind": "LinkedField",
                "name": "person",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "PersonItem_person"
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SearchResultListQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "RelationsSearchResult",
        "kind": "LinkedField",
        "name": "relationsByPersonSearch",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Relation",
            "kind": "LinkedField",
            "name": "nodes",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "LocationInstance",
                "kind": "LinkedField",
                "name": "locationInstance",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Location",
                    "kind": "LinkedField",
                    "name": "location",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Address",
                        "kind": "LinkedField",
                        "name": "addresses",
                        "plural": true,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "address",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      (v2/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "longitude",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "latitude",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Relation",
                    "kind": "LinkedField",
                    "name": "relations",
                    "plural": true,
                    "selections": [
                      (v5/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "startDate",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "endDate",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "quote",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "RelationType",
                        "kind": "LinkedField",
                        "name": "relationType",
                        "plural": false,
                        "selections": [
                          (v2/*: any*/),
                          (v4/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v2/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v5/*: any*/),
              (v2/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "0cb9b79639effcb5c2cb8af2cfb4df91",
    "id": null,
    "metadata": {},
    "name": "SearchResultListQuery",
    "operationKind": "query",
    "text": "query SearchResultListQuery(\n  $input: SearchInput!\n) {\n  relationsByPersonSearch(input: $input) {\n    nodes {\n      locationInstance {\n        id\n        ...LocationInstanceItem_locationInstance\n        ...LocationInstanceRelationsPopup_data\n      }\n      person {\n        id\n        ...PersonItem_person\n      }\n      id\n    }\n  }\n}\n\nfragment LocationInstanceItem_locationInstance on LocationInstance {\n  id\n  mainPhotoLink\n  name\n  location {\n    addresses {\n      address\n    }\n    id\n  }\n}\n\nfragment LocationInstanceRelationsPopup_data on LocationInstance {\n  location {\n    longitude\n    latitude\n    id\n  }\n  name\n  relations {\n    ...RelationCard_relation\n    id\n  }\n}\n\nfragment PersonItem_person on Person {\n  id\n  lastName\n  firstName\n  patronymic\n  mainPhotoLink\n}\n\nfragment RelatedPersonBlock_person on Person {\n  id\n  lastName\n  firstName\n  patronymic\n  mainPhotoLink\n}\n\nfragment RelationCard_relation on Relation {\n  person {\n    ...RelatedPersonBlock_person\n    id\n  }\n  startDate\n  endDate\n  quote\n  relationType {\n    id\n    name\n  }\n}\n"
  }
};
})();
(node as any).hash = 'de760abab13dd12cd9903b57018a4e12';
export default node;
