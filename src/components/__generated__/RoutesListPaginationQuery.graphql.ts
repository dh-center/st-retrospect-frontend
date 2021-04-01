/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type RoutesListPaginationQueryVariables = {
    after?: unknown | null;
    count?: number | null;
};
export type RoutesListPaginationQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"RoutesList_questsConnection">;
};
export type RoutesListPaginationQuery = {
    readonly response: RoutesListPaginationQueryResponse;
    readonly variables: RoutesListPaginationQueryVariables;
};



/*
query RoutesListPaginationQuery(
  $after: Cursor
  $count: Int = 10
) {
  ...RoutesList_questsConnection_2QE1um
}

fragment RouteItem_quest on Quest {
  name
  photo
}

fragment RoutesList_questsConnection_2QE1um on Query {
  quests(first: $count, after: $after) {
    edges {
      node {
        ...RouteItem_quest
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
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "after"
  },
  {
    "defaultValue": 10,
    "kind": "LocalArgument",
    "name": "count"
  }
],
v1 = {
  "kind": "Variable",
  "name": "after",
  "variableName": "after"
},
v2 = [
  (v1/*: any*/),
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "RoutesListPaginationQuery",
    "selections": [
      {
        "args": [
          (v1/*: any*/),
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "RoutesListPaginationQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
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
                    "name": "photo",
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
        "args": (v2/*: any*/),
        "filters": null,
        "handle": "connection",
        "key": "RoutesList_questsConnection_quests",
        "kind": "LinkedHandle",
        "name": "quests"
      }
    ]
  },
  "params": {
    "cacheID": "3038f2b18085d88ed95519c86ca508d7",
    "id": null,
    "metadata": {},
    "name": "RoutesListPaginationQuery",
    "operationKind": "query",
    "text": "query RoutesListPaginationQuery(\n  $after: Cursor\n  $count: Int = 10\n) {\n  ...RoutesList_questsConnection_2QE1um\n}\n\nfragment RouteItem_quest on Quest {\n  name\n  photo\n}\n\nfragment RoutesList_questsConnection_2QE1um on Query {\n  quests(first: $count, after: $after) {\n    edges {\n      node {\n        ...RouteItem_quest\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '7b775500e8a2d73cac2ef9f4f72d8958';
export default node;
