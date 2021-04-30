/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type MapViewQuestQueryVariables = {
    id: string;
};
export type MapViewQuestQueryResponse = {
    readonly quest: {
        readonly data: {
            readonly blocks: ReadonlyArray<unknown>;
        } | null;
    } | null;
};
export type MapViewQuestQuery = {
    readonly response: MapViewQuestQueryResponse;
    readonly variables: MapViewQuestQueryVariables;
};



/*
query MapViewQuestQuery(
  $id: GlobalId!
) {
  quest(id: $id) {
    data {
      blocks
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
  "concreteType": "EditorData",
  "kind": "LinkedField",
  "name": "data",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "blocks",
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "MapViewQuestQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Quest",
        "kind": "LinkedField",
        "name": "quest",
        "plural": false,
        "selections": [
          (v2/*: any*/)
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
    "name": "MapViewQuestQuery",
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
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "b80304bcdc14841a3c5e3ac5c9564a94",
    "id": null,
    "metadata": {},
    "name": "MapViewQuestQuery",
    "operationKind": "query",
    "text": "query MapViewQuestQuery(\n  $id: GlobalId!\n) {\n  quest(id: $id) {\n    data {\n      blocks\n    }\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '3189833941bb976e3115b62b584cf0c4';
export default node;
