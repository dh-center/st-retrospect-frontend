/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type LocationInstanceCardQueryVariables = {
    id: string;
};
export type LocationInstanceCardQueryResponse = {
    readonly locationInstance: {
        readonly mainPhotoLink: string | null;
        readonly name: string | null;
        readonly location: {
            readonly addresses: ReadonlyArray<{
                readonly address: string | null;
            }> | null;
        };
        readonly relations: ReadonlyArray<{
            readonly person: {
                readonly lastName: string | null;
                readonly firstName: string | null;
                readonly patronymic: string | null;
                readonly mainPhotoLink: string | null;
            } | null;
        }>;
        readonly description: string | null;
        readonly architects: ReadonlyArray<{
            readonly lastName: string | null;
            readonly firstName: string | null;
            readonly patronymic: string | null;
        } | null> | null;
        readonly constructionDate: string | null;
        readonly demolitionDate: string | null;
        readonly wikiLink: string | null;
    } | null;
};
export type LocationInstanceCardQuery = {
    readonly response: LocationInstanceCardQueryResponse;
    readonly variables: LocationInstanceCardQueryVariables;
};



/*
query LocationInstanceCardQuery(
  $id: GlobalId!
) {
  locationInstance(id: $id) {
    mainPhotoLink
    name
    location {
      addresses {
        address
      }
      id
    }
    relations {
      person {
        lastName
        firstName
        patronymic
        mainPhotoLink
        id
      }
      id
    }
    description
    architects {
      lastName
      firstName
      patronymic
      id
    }
    constructionDate
    demolitionDate
    wikiLink
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
  "name": "mainPhotoLink",
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
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "lastName",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "firstName",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "patronymic",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "constructionDate",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "demolitionDate",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "wikiLink",
  "storageKey": null
},
v12 = {
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
    "name": "LocationInstanceCardQuery",
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
          {
            "alias": null,
            "args": null,
            "concreteType": "Location",
            "kind": "LinkedField",
            "name": "location",
            "plural": false,
            "selections": [
              (v4/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Relation",
            "kind": "LinkedField",
            "name": "relations",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Person",
                "kind": "LinkedField",
                "name": "person",
                "plural": false,
                "selections": [
                  (v5/*: any*/),
                  (v6/*: any*/),
                  (v7/*: any*/),
                  (v2/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v8/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Person",
            "kind": "LinkedField",
            "name": "architects",
            "plural": true,
            "selections": [
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/)
            ],
            "storageKey": null
          },
          (v9/*: any*/),
          (v10/*: any*/),
          (v11/*: any*/)
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
    "name": "LocationInstanceCardQuery",
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
          {
            "alias": null,
            "args": null,
            "concreteType": "Location",
            "kind": "LinkedField",
            "name": "location",
            "plural": false,
            "selections": [
              (v4/*: any*/),
              (v12/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Relation",
            "kind": "LinkedField",
            "name": "relations",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Person",
                "kind": "LinkedField",
                "name": "person",
                "plural": false,
                "selections": [
                  (v5/*: any*/),
                  (v6/*: any*/),
                  (v7/*: any*/),
                  (v2/*: any*/),
                  (v12/*: any*/)
                ],
                "storageKey": null
              },
              (v12/*: any*/)
            ],
            "storageKey": null
          },
          (v8/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Person",
            "kind": "LinkedField",
            "name": "architects",
            "plural": true,
            "selections": [
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v12/*: any*/)
            ],
            "storageKey": null
          },
          (v9/*: any*/),
          (v10/*: any*/),
          (v11/*: any*/),
          (v12/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "63c031c6c13ca5e6fcf8b3d54fd87bfc",
    "id": null,
    "metadata": {},
    "name": "LocationInstanceCardQuery",
    "operationKind": "query",
    "text": "query LocationInstanceCardQuery(\n  $id: GlobalId!\n) {\n  locationInstance(id: $id) {\n    mainPhotoLink\n    name\n    location {\n      addresses {\n        address\n      }\n      id\n    }\n    relations {\n      person {\n        lastName\n        firstName\n        patronymic\n        mainPhotoLink\n        id\n      }\n      id\n    }\n    description\n    architects {\n      lastName\n      firstName\n      patronymic\n      id\n    }\n    constructionDate\n    demolitionDate\n    wikiLink\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '25907257abb234d61b6336627a45f04f';
export default node;
