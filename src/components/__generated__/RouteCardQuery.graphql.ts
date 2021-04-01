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
          (v4/*: any*/)
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
    "cacheID": "a9bbe50c842129b7215f0411d66497a5",
    "id": null,
    "metadata": {},
    "name": "RouteCardQuery",
    "operationKind": "query",
    "text": "query RouteCardQuery(\n  $id: GlobalId!\n) {\n  quest(id: $id) {\n    name\n    description\n    photo\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '0c18b7a1356ac057fae315c33a20de22';
export default node;
