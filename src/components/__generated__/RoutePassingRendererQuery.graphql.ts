/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type RoutePassingRendererQueryVariables = {
    id: string;
};
export type RoutePassingRendererQueryResponse = {
    readonly quest: {
        readonly data: {
            readonly blocks: ReadonlyArray<unknown>;
        } | null;
    } | null;
};
export type RoutePassingRendererQuery = {
    readonly response: RoutePassingRendererQueryResponse;
    readonly variables: RoutePassingRendererQueryVariables;
};



/*
query RoutePassingRendererQuery(
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
    "name": "RoutePassingRendererQuery",
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
    "name": "RoutePassingRendererQuery",
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
    "cacheID": "3321906ed4ba557bd9444675a25caaf4",
    "id": null,
    "metadata": {},
    "name": "RoutePassingRendererQuery",
    "operationKind": "query",
    "text": "query RoutePassingRendererQuery(\n  $id: GlobalId!\n) {\n  quest(id: $id) {\n    data {\n      blocks\n    }\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'af9eb928b3ada5a9c75213b86f40bdae';
export default node;
