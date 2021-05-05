/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CurrentMapContentContext_relations = ReadonlyArray<{
    readonly id: string;
    readonly locationInstance: {
        readonly " $fragmentRefs": FragmentRefs<"RelationsPopup_relations">;
    };
    readonly " $refType": "CurrentMapContentContext_relations";
}>;
export type CurrentMapContentContext_relations$data = CurrentMapContentContext_relations;
export type CurrentMapContentContext_relations$key = ReadonlyArray<{
    readonly " $data"?: CurrentMapContentContext_relations$data;
    readonly " $fragmentRefs": FragmentRefs<"CurrentMapContentContext_relations">;
}>;



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "CurrentMapContentContext_relations",
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
      "concreteType": "LocationInstance",
      "kind": "LinkedField",
      "name": "locationInstance",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "RelationsPopup_relations"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Relation",
  "abstractKey": null
};
(node as any).hash = 'ecf209f6ff6d17e37c6eb87a79c58300';
export default node;
