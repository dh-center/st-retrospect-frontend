/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type LocationInstanceBlockQueryVariables = {
    id: string;
};
export type LocationInstanceBlockQueryResponse = {
    readonly locationInstance: {
        readonly id: string;
        readonly name: string | null;
        readonly mainPhotoLink: string | null;
        readonly location: {
            readonly addresses: ReadonlyArray<{
                readonly address: string | null;
            }> | null;
        };
    } | null;
};
export type LocationInstanceBlockQuery = {
    readonly response: LocationInstanceBlockQueryResponse;
    readonly variables: LocationInstanceBlockQueryVariables;
};



/*
query LocationInstanceBlockQuery(
  $id: GlobalId!
) {
  locationInstance(id: $id) {
    id
    name
    mainPhotoLink
    location {
      addresses {
        address
      }
      id
    }
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
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "mainPhotoLink",
  "storageKey": null
},
v5 = {
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
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "LocationInstanceBlockQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
              (v5/*: any*/)
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
    "name": "LocationInstanceBlockQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
    "cacheID": "05606553651da98adeaac14f29711045",
    "id": null,
    "metadata": {},
    "name": "LocationInstanceBlockQuery",
    "operationKind": "query",
    "text": "query LocationInstanceBlockQuery(\n  $id: GlobalId!\n) {\n  locationInstance(id: $id) {\n    id\n    name\n    mainPhotoLink\n    location {\n      addresses {\n        address\n      }\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '7e35da0d7eb1f194e2af9198a820a17d';
export default node;
