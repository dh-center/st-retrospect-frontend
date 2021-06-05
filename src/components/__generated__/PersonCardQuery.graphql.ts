/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type PersonCardQueryVariables = {
    id: string;
};
export type PersonCardQueryResponse = {
    readonly person: {
        readonly lastName: string | null;
        readonly firstName: string | null;
        readonly patronymic: string | null;
        readonly mainPhotoLink: string | null;
        readonly birthDate: string | null;
        readonly deathDate: string | null;
        readonly description: string | null;
        readonly wikiLink: string | null;
        readonly relations: ReadonlyArray<{
            readonly locationInstance: {
                readonly " $fragmentRefs": FragmentRefs<"LocationInstanceRelationsPopup_data">;
            };
        }>;
    } | null;
};
export type PersonCardQuery = {
    readonly response: PersonCardQueryResponse;
    readonly variables: PersonCardQueryVariables;
};



/*
query PersonCardQuery(
  $id: GlobalId!
) {
  person(id: $id) {
    lastName
    firstName
    patronymic
    mainPhotoLink
    birthDate
    deathDate
    description
    wikiLink
    relations {
      locationInstance {
        ...LocationInstanceRelationsPopup_data
        id
      }
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
  "name": "lastName",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "firstName",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "patronymic",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "mainPhotoLink",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "birthDate",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "deathDate",
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
  "name": "wikiLink",
  "storageKey": null
},
v10 = {
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
    "name": "PersonCardQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Person",
        "kind": "LinkedField",
        "name": "person",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
          (v9/*: any*/),
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
                "concreteType": "LocationInstance",
                "kind": "LinkedField",
                "name": "locationInstance",
                "plural": false,
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
    "name": "PersonCardQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Person",
        "kind": "LinkedField",
        "name": "person",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
          (v9/*: any*/),
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
                "concreteType": "LocationInstance",
                "kind": "LinkedField",
                "name": "locationInstance",
                "plural": false,
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
                      (v10/*: any*/)
                    ],
                    "storageKey": null
                  },
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
                          (v10/*: any*/),
                          (v2/*: any*/),
                          (v3/*: any*/),
                          (v4/*: any*/),
                          (v5/*: any*/)
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
                      (v10/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v10/*: any*/)
                ],
                "storageKey": null
              },
              (v10/*: any*/)
            ],
            "storageKey": null
          },
          (v10/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "7065766e7698666f548643f77128dcbe",
    "id": null,
    "metadata": {},
    "name": "PersonCardQuery",
    "operationKind": "query",
    "text": "query PersonCardQuery(\n  $id: GlobalId!\n) {\n  person(id: $id) {\n    lastName\n    firstName\n    patronymic\n    mainPhotoLink\n    birthDate\n    deathDate\n    description\n    wikiLink\n    relations {\n      locationInstance {\n        ...LocationInstanceRelationsPopup_data\n        id\n      }\n      id\n    }\n    id\n  }\n}\n\nfragment LocationInstanceRelationsPopup_data on LocationInstance {\n  location {\n    longitude\n    latitude\n    id\n  }\n  name\n  relations {\n    ...RelationCard_relation\n    id\n  }\n}\n\nfragment RelatedPersonBlock_person on Person {\n  id\n  lastName\n  firstName\n  patronymic\n  mainPhotoLink\n}\n\nfragment RelationCard_relation on Relation {\n  person {\n    ...RelatedPersonBlock_person\n    id\n  }\n  startDate\n  endDate\n  quote\n}\n"
  }
};
})();
(node as any).hash = 'b3d5566eea6146a22c133082dcabcc48';
export default node;
