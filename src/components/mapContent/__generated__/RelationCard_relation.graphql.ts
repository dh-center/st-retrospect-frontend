/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type RelationCard_relation = {
    readonly locationInstance: {
        readonly name: string | null;
    };
    readonly person: {
        readonly " $fragmentRefs": FragmentRefs<"RelatedPersonBlock_person">;
    };
    readonly startDate: string | null;
    readonly endDate: string | null;
    readonly quote: string | null;
    readonly " $refType": "RelationCard_relation";
};
export type RelationCard_relation$data = RelationCard_relation;
export type RelationCard_relation$key = {
    readonly " $data"?: RelationCard_relation$data;
    readonly " $fragmentRefs": FragmentRefs<"RelationCard_relation">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RelationCard_relation",
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
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Person",
      "kind": "LinkedField",
      "name": "person",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "RelatedPersonBlock_person"
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
    }
  ],
  "type": "Relation",
  "abstractKey": null
};
(node as any).hash = '7c0d73522804e0a448235d1b9ed7e822';
export default node;
