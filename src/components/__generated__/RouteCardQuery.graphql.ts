/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type RouteCardQueryVariables = {
    id: string;
};
export type RouteCardQueryResponse = {
    readonly quest: {
        readonly name: string;
        readonly description: string | null;
        readonly photo: string | null;
        readonly locationInstances: ReadonlyArray<{
            readonly location: {
                readonly latitude: number | null;
                readonly longitude: number | null;
            };
        }>;
    } | null;
};
export type RouteCardQuery = {
    readonly response: RouteCardQueryResponse;
    readonly variables: RouteCardQueryVariables;
};



/*
query RouteCardQuery(
  $id: GlobalId!
) {
  quest(id: $id) {
    name
    description
    photo
    locationInstances {
      location {
        latitude
        longitude
        id
      }
      id
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
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "photo",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "latitude",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "longitude",
  "storageKey": null
},
v7 = {
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
    "name": "RouteCardQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Quest",
        "kind": "LinkedField",
        "name": "quest",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "LocationInstance",
            "kind": "LinkedField",
            "name": "locationInstances",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Location",
                "kind": "LinkedField",
                "name": "location",
                "plural": false,
                "selections": [
                  (v5/*: any*/),
                  (v6/*: any*/)
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
    "name": "RouteCardQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Quest",
        "kind": "LinkedField",
        "name": "quest",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "LocationInstance",
            "kind": "LinkedField",
            "name": "locationInstances",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Location",
                "kind": "LinkedField",
                "name": "location",
                "plural": false,
                "selections": [
                  (v5/*: any*/),
                  (v6/*: any*/),
                  (v7/*: any*/)
                ],
                "storageKey": null
              },
              (v7/*: any*/)
            ],
            "storageKey": null
          },
          (v7/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "f8f94ed4a0492e6c13e39d44cae52a74",
    "id": null,
    "metadata": {},
    "name": "RouteCardQuery",
    "operationKind": "query",
    "text": "query RouteCardQuery(\n  $id: GlobalId!\n) {\n  quest(id: $id) {\n    name\n    description\n    photo\n    locationInstances {\n      location {\n        latitude\n        longitude\n        id\n      }\n      id\n    }\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '345eee74b3dace17a0b2b9f0c313bf74';
export default node;
