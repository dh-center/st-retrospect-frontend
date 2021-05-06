/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type RelationCard_relation = {
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
(node as any).hash = '031510e703237f165c64c396cb90d5bd';
export default node;
