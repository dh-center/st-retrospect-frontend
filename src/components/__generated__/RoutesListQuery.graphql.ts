/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type RoutesListQueryVariables = {
    count?: number | null;
    after?: unknown | null;
};
export type RoutesListQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"RoutesList_questsConnection">;
};
export type RoutesListQuery = {
    readonly response: RoutesListQueryResponse;
    readonly variables: RoutesListQueryVariables;
};



/*
query RoutesListQuery(
  $count: Int
  $after: Cursor
) {
  ...RoutesList_questsConnection_2QE1um
}

fragment RoutesList_questsConnection_2QE1um on Query {
  quests(first: $count, after: $after) {
    edges {
      node {
        name
        id
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "after"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "count"
},
v2 = {
  "kind": "Variable",
  "name": "after",
  "variableName": "after"
},
v3 = [
  (v2/*: any*/),
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "RoutesListQuery",
    "selections": [
      {
        "args": [
          (v2/*: any*/),
          {
            "kind": "Variable",
            "name": "count",
            "variableName": "count"
          }
        ],
        "kind": "FragmentSpread",
        "name": "RoutesList_questsConnection"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "RoutesListQuery",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "QuestConnection",
        "kind": "LinkedField",
        "name": "quests",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "QuestEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Quest",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
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
                    "kind": "ScalarField",
                    "name": "id",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "__typename",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "cursor",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "PageInfo",
            "kind": "LinkedField",
            "name": "pageInfo",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "endCursor",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasNextPage",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v3/*: any*/),
        "filters": null,
        "handle": "connection",
        "key": "RoutesList_questsConnection_quests",
        "kind": "LinkedHandle",
        "name": "quests"
      }
    ]
  },
  "params": {
    "cacheID": "ecd482e7875dd1827ec2ef541d68eda5",
    "id": null,
    "metadata": {},
    "name": "RoutesListQuery",
    "operationKind": "query",
    "text": "query RoutesListQuery(\n  $count: Int\n  $after: Cursor\n) {\n  ...RoutesList_questsConnection_2QE1um\n}\n\nfragment RoutesList_questsConnection_2QE1um on Query {\n  quests(first: $count, after: $after) {\n    edges {\n      node {\n        name\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'ba475df81dfdc56a24a32927638fe2d8';
export default node;
