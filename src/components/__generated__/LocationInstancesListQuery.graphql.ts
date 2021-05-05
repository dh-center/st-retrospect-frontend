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
                readonly " $fragmentRefs": FragmentRefs<"LocationInstanceItem_locationInstance">;
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
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "mainPhotoLink",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "name",
                    "storageKey": null
                  },
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
    "cacheID": "b968a0d9bd1b68a9f80b215afa6d4fcc",
    "id": null,
    "metadata": {},
    "name": "LocationInstancesListQuery",
    "operationKind": "query",
    "text": "query LocationInstancesListQuery(\n  $input: SearchInput!\n) {\n  locationInstancesSearch(input: $input) {\n    edges {\n      node {\n        ...LocationInstanceItem_locationInstance\n        id\n      }\n    }\n  }\n}\n\nfragment LocationInstanceItem_locationInstance on LocationInstance {\n  id\n  mainPhotoLink\n  name\n  location {\n    addresses {\n      address\n    }\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '34773d26b101ce6c25dcde75e61648e6';
export default node;
