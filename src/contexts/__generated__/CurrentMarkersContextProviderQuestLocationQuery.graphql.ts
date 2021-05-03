/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type CurrentMarkersContextProviderQuestLocationQueryVariables = {
    id: string;
};
export type CurrentMarkersContextProviderQuestLocationQueryResponse = {
    readonly locationInstance: {
        readonly location: {
            readonly latitude: number | null;
            readonly longitude: number | null;
        };
    } | null;
};
export type CurrentMarkersContextProviderQuestLocationQuery = {
    readonly response: CurrentMarkersContextProviderQuestLocationQueryResponse;
    readonly variables: CurrentMarkersContextProviderQuestLocationQueryVariables;
};



/*
query CurrentMarkersContextProviderQuestLocationQuery(
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
    "name": "CurrentMarkersContextProviderQuestLocationQuery",
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
    "name": "CurrentMarkersContextProviderQuestLocationQuery",
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
    "cacheID": "6f2044408a7d7d9730351e3f969d4665",
    "id": null,
    "metadata": {},
    "name": "CurrentMarkersContextProviderQuestLocationQuery",
    "operationKind": "query",
    "text": "query CurrentMarkersContextProviderQuestLocationQuery(\n  $id: GlobalId!\n) {\n  locationInstance(id: $id) {\n    location {\n      latitude\n      longitude\n      id\n    }\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '04e41877a0602696c52051cdd36acb47';
export default node;
