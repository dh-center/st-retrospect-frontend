/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type MapViewQuestLocationQueryVariables = {
    id: string;
};
export type MapViewQuestLocationQueryResponse = {
    readonly locationInstance: {
        readonly location: {
            readonly latitude: number | null;
            readonly longitude: number | null;
        };
    } | null;
};
export type MapViewQuestLocationQuery = {
    readonly response: MapViewQuestLocationQueryResponse;
    readonly variables: MapViewQuestLocationQueryVariables;
};



/*
query MapViewQuestLocationQuery(
  $id: GlobalId!
) {
  locationInstance(id: $id) {
    location {
      latitude
      longitude
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
  "name": "latitude",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "longitude",
  "storageKey": null
},
v4 = {
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
    "name": "MapViewQuestLocationQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "LocationInstance",
        "kind": "LinkedField",
        "name": "locationInstance",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Location",
            "kind": "LinkedField",
            "name": "location",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/)
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
    "name": "MapViewQuestLocationQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "LocationInstance",
        "kind": "LinkedField",
        "name": "locationInstance",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Location",
            "kind": "LinkedField",
            "name": "location",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/)
            ],
            "storageKey": null
          },
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "b02df32017385d889efd3691e234d699",
    "id": null,
    "metadata": {},
    "name": "MapViewQuestLocationQuery",
    "operationKind": "query",
    "text": "query MapViewQuestLocationQuery(\n  $id: GlobalId!\n) {\n  locationInstance(id: $id) {\n    location {\n      latitude\n      longitude\n      id\n    }\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '73cc60481d5f64fc48ae2d21f0e9e07e';
export default node;
