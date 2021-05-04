/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type RouteCardQueryVariables = {
    id: string;
};
export type RouteCardQueryResponse = {
    readonly quest: {
        readonly name: string;
        readonly description: string | null;
        readonly photo: string | null;
        readonly locationInstances: ReadonlyArray<{
            readonly location: {
                readonly " $fragmentRefs": FragmentRefs<"CurrentMapContentContextLocation">;
            };
        }>;
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
    locationInstances {
      location {
        ...CurrentMapContentContextLocation
        id
      }
      id
    }
    id
  }
}

fragment CurrentMapContentContextLocation on Location {
  longitude
  latitude
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
},
v5 = {
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
            "concreteType": "LocationInstance",
            "kind": "LinkedField",
            "name": "locationInstances",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Location",
                "kind": "LinkedField",
                "name": "location",
                "plural": false,
                "selections": [
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "CurrentMapContentContextLocation"
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
            "concreteType": "LocationInstance",
            "kind": "LinkedField",
            "name": "locationInstances",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Location",
                "kind": "LinkedField",
                "name": "location",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "longitude",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "latitude",
                    "storageKey": null
                  },
                  (v5/*: any*/)
                ],
                "storageKey": null
              },
              (v5/*: any*/)
            ],
            "storageKey": null
          },
          (v5/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "c77cad1e7f37d41da8d0dc456052115e",
    "id": null,
    "metadata": {},
    "name": "RouteCardQuery",
    "operationKind": "query",
    "text": "query RouteCardQuery(\n  $id: GlobalId!\n) {\n  quest(id: $id) {\n    name\n    description\n    photo\n    locationInstances {\n      location {\n        ...CurrentMapContentContextLocation\n        id\n      }\n      id\n    }\n    id\n  }\n}\n\nfragment CurrentMapContentContextLocation on Location {\n  longitude\n  latitude\n}\n"
  }
};
})();
(node as any).hash = '31f318fc163400ff6337dca0683bf4c7';
export default node;
