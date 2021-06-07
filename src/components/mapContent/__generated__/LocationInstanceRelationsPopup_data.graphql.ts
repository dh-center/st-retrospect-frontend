/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type LocationInstanceRelationsPopup_data = {
    readonly location: {
        readonly longitude: number | null;
        readonly latitude: number | null;
    };
    readonly name: string | null;
    readonly relations: ReadonlyArray<{
        readonly id: string;
        readonly " $fragmentRefs": FragmentRefs<"RelationCard_relation">;
    }>;
    readonly " $refType": "LocationInstanceRelationsPopup_data";
};
export type LocationInstanceRelationsPopup_data$data = LocationInstanceRelationsPopup_data;
export type LocationInstanceRelationsPopup_data$key = {
    readonly " $data"?: LocationInstanceRelationsPopup_data$data;
    readonly " $fragmentRefs": FragmentRefs<"LocationInstanceRelationsPopup_data">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "LocationInstanceRelationsPopup_data",
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
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        },
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
(node as any).hash = 'ff53b0bb3e5c571d43995b1a91dd57f4';
export default node;
