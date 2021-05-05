/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type SearchInput = {
    query: string;
    startYear?: number | null;
    endYear?: number | null;
    category?: Array<string> | null;
    windowedPagination?: WindowedPaginationArgs | null;
    cursorPagination?: CursoredPaginationArgs | null;
};
export type WindowedPaginationArgs = {
    skip?: number | null;
    first?: number | null;
};
export type CursoredPaginationArgs = {
    after?: unknown | null;
    before?: unknown | null;
    first?: number | null;
    last?: number | null;
};
export type LocationInstancesListQueryVariables = {
    input: SearchInput;
};
export type LocationInstancesListQueryResponse = {
    readonly locationInstancesSearch: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly " $fragmentRefs": FragmentRefs<"LocationInstanceItem_locationInstance" | "LocationInstanceRelationsPopup_data">;
            };
        }>;
    };
};
export type LocationInstancesListQuery = {
    readonly response: LocationInstancesListQueryResponse;
    readonly variables: LocationInstancesListQueryVariables;
};



/*
query LocationInstancesListQuery(
  $input: SearchInput!
) {
  locationInstancesSearch(input: $input) {
    edges {
      node {
        ...LocationInstanceItem_locationInstance
        ...LocationInstanceRelationsPopup_data
        id
      }
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
  relations {
    ...RelationCard_relation
    id
  }
}

fragment RelatedPersonBlock_person on Person {
  id
  lastName
  firstName
  patronymic
  mainPhotoLink
}

fragment RelationCard_relation on Relation {
  locationInstance {
    name
    id
  }
  person {
    ...RelatedPersonBlock_person
    id
  }
  startDate
  endDate
  quote
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
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "LocationInstancesListQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "LocationInstanceConnection",
        "kind": "LinkedField",
        "name": "locationInstancesSearch",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "LocationInstanceEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "LocationInstance",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
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
    "name": "LocationInstancesListQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "LocationInstanceConnection",
        "kind": "LinkedField",
        "name": "locationInstancesSearch",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "LocationInstanceEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "LocationInstance",
                "kind": "LinkedField",
                "name": "node",
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
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "LocationInstance",
                        "kind": "LinkedField",
                        "name": "locationInstance",
                        "plural": false,
                        "selections": [
                          (v4/*: any*/),
                          (v2/*: any*/)
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
                      },
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
                      (v2/*: any*/)
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
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "18e702d73a948c378cc219fc52f425a0",
    "id": null,
    "metadata": {},
    "name": "LocationInstancesListQuery",
    "operationKind": "query",
    "text": "query LocationInstancesListQuery(\n  $input: SearchInput!\n) {\n  locationInstancesSearch(input: $input) {\n    edges {\n      node {\n        ...LocationInstanceItem_locationInstance\n        ...LocationInstanceRelationsPopup_data\n        id\n      }\n    }\n  }\n}\n\nfragment LocationInstanceItem_locationInstance on LocationInstance {\n  id\n  mainPhotoLink\n  name\n  location {\n    addresses {\n      address\n    }\n    id\n  }\n}\n\nfragment LocationInstanceRelationsPopup_data on LocationInstance {\n  location {\n    longitude\n    latitude\n    id\n  }\n  relations {\n    ...RelationCard_relation\n    id\n  }\n}\n\nfragment RelatedPersonBlock_person on Person {\n  id\n  lastName\n  firstName\n  patronymic\n  mainPhotoLink\n}\n\nfragment RelationCard_relation on Relation {\n  locationInstance {\n    name\n    id\n  }\n  person {\n    ...RelatedPersonBlock_person\n    id\n  }\n  startDate\n  endDate\n  quote\n}\n"
  }
};
})();
(node as any).hash = 'bcc2c1ba628f6b50e532160aca04b20b';
export default node;
