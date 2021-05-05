/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type RelationsPopup_relations = {
    readonly location: {
        readonly longitude: number | null;
        readonly latitude: number | null;
    };
    readonly relations: ReadonlyArray<{
        readonly " $fragmentRefs": FragmentRefs<"RelationCard_relation">;
    }>;
    readonly " $refType": "RelationsPopup_relations";
};
export type RelationsPopup_relations$data = RelationsPopup_relations;
export type RelationsPopup_relations$key = {
    readonly " $data"?: RelationsPopup_relations$data;
    readonly " $fragmentRefs": FragmentRefs<"RelationsPopup_relations">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RelationsPopup_relations",
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
        }
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
          "args": null,
          "kind": "FragmentSpread",
          "name": "RelationCard_relation"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "LocationInstance",
  "abstractKey": null
};
(node as any).hash = '2b79fd1bcfa28675149407aff83e757e';
export default node;
