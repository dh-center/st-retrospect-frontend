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
            readonly " $fragmentRefs": FragmentRefs<"LocationInstanceRelationsPopup_data">;
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
      ...LocationInstanceRelationsPopup_data
      id
    }
    id
  }
}

fragment LocationInstanceRelationsPopup_data on LocationInstance {
  location {
    longitude
    latitude
    id
  }
  name
  relations {
    ...RelationCard_relation
    id
  }
}

fragment RelatedPersonBlock_person on Person {
  id
  lastName
  firstName
  patronymic
  mainPhotoLink
}

fragment RelationCard_relation on Relation {
  person {
    ...RelatedPersonBlock_person
    id
  }
  startDate
  endDate
  quote
  relationType {
    id
    name
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
                "args": null,
                "kind": "FragmentSpread",
                "name": "LocationInstanceRelationsPopup_data"
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
              (v2/*: any*/),
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
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "lastName",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "firstName",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "patronymic",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "mainPhotoLink",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "startDate",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "endDate",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "quote",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "RelationType",
                    "kind": "LinkedField",
                    "name": "relationType",
                    "plural": false,
                    "selections": [
                      (v5/*: any*/),
                      (v2/*: any*/)
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
          },
          (v5/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "4218d71fa82a6d9df3e9ffbf435a9372",
    "id": null,
    "metadata": {},
    "name": "RouteCardQuery",
    "operationKind": "query",
    "text": "query RouteCardQuery(\n  $id: GlobalId!\n) {\n  quest(id: $id) {\n    name\n    description\n    photo\n    locationInstances {\n      ...LocationInstanceRelationsPopup_data\n      id\n    }\n    id\n  }\n}\n\nfragment LocationInstanceRelationsPopup_data on LocationInstance {\n  location {\n    longitude\n    latitude\n    id\n  }\n  name\n  relations {\n    ...RelationCard_relation\n    id\n  }\n}\n\nfragment RelatedPersonBlock_person on Person {\n  id\n  lastName\n  firstName\n  patronymic\n  mainPhotoLink\n}\n\nfragment RelationCard_relation on Relation {\n  person {\n    ...RelatedPersonBlock_person\n    id\n  }\n  startDate\n  endDate\n  quote\n  relationType {\n    id\n    name\n  }\n}\n"
  }
};
})();
(node as any).hash = 'df9232f88713c5b7f6dbb1d9825d6595';
export default node;
