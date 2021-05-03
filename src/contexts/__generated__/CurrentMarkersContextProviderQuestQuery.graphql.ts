/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type CurrentMarkersContextProviderQuestQueryVariables = {
    id: string;
};
export type CurrentMarkersContextProviderQuestQueryResponse = {
    readonly quest: {
        readonly data: {
            readonly blocks: ReadonlyArray<unknown>;
        } | null;
    } | null;
};
export type CurrentMarkersContextProviderQuestQuery = {
    readonly response: CurrentMarkersContextProviderQuestQueryResponse;
    readonly variables: CurrentMarkersContextProviderQuestQueryVariables;
};



/*
query CurrentMarkersContextProviderQuestQuery(
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
    "name": "CurrentMarkersContextProviderQuestQuery",
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
    "name": "CurrentMarkersContextProviderQuestQuery",
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
    "cacheID": "4866d6f64e105900edc8119386b6dba1",
    "id": null,
    "metadata": {},
    "name": "CurrentMarkersContextProviderQuestQuery",
    "operationKind": "query",
    "text": "query CurrentMarkersContextProviderQuestQuery(\n  $id: GlobalId!\n) {\n  quest(id: $id) {\n    data {\n      blocks\n    }\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '959e666ac67e5e8c55d05787ff062019';
export default node;
