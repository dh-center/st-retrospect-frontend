/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Application = "MOBILE" | "WEB" | "%future added value";
export type RoutesList_questsConnection = {
    readonly quests: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly whereDisplays: ReadonlyArray<Application>;
                readonly " $fragmentRefs": FragmentRefs<"RouteItem_quest">;
            };
        }>;
    };
    readonly " $refType": "RoutesList_questsConnection";
};
export type RoutesList_questsConnection$data = RoutesList_questsConnection;
export type RoutesList_questsConnection$key = {
    readonly " $data"?: RoutesList_questsConnection$data;
    readonly " $fragmentRefs": FragmentRefs<"RoutesList_questsConnection">;
};



const node: ReaderFragment = (function(){
var v0 = [
  "quests"
];
return {
  "argumentDefinitions": [
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
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "after",
        "direction": "forward",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "count",
          "cursor": "after"
        },
        "backward": null,
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [],
      "operation": require('./RoutesListPaginationQuery.graphql.ts')
    }
  },
  "name": "RoutesList_questsConnection",
  "selections": [
    {
      "alias": "quests",
      "args": null,
      "concreteType": "QuestConnection",
      "kind": "LinkedField",
      "name": "__RoutesList_questsConnection_quests_connection",
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
                  "name": "whereDisplays",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "__typename",
                  "storageKey": null
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "RouteItem_quest"
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
    }
  ],
  "type": "Query",
  "abstractKey": null
};
})();
(node as any).hash = 'acfddda6f2244c68b58c8588b6dbf59c';
export default node;
