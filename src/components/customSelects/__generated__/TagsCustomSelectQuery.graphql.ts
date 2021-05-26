/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type TagsCustomSelectQueryVariables = {};
export type TagsCustomSelectQueryResponse = {
    readonly tags: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly value: string;
            };
        }>;
    };
};
export type TagsCustomSelectQuery = {
    readonly response: TagsCustomSelectQueryResponse;
    readonly variables: TagsCustomSelectQueryVariables;
};



/*
query TagsCustomSelectQuery {
  tags {
    edges {
      node {
        id
        value
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "TagConnection",
    "kind": "LinkedField",
    "name": "tags",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "TagEdge",
        "kind": "LinkedField",
        "name": "edges",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Tag",
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "value",
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
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "TagsCustomSelectQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "TagsCustomSelectQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "41d15132233c5cbb6a37cc9c892e6f2f",
    "id": null,
    "metadata": {},
    "name": "TagsCustomSelectQuery",
    "operationKind": "query",
    "text": "query TagsCustomSelectQuery {\n  tags {\n    edges {\n      node {\n        id\n        value\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'b99ed83187d9dcacc2f4cabc930ff1f3';
export default node;
