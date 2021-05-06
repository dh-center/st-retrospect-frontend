/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type LocationInstanceItem_locationInstance = {
    readonly id: string;
    readonly mainPhotoLink: string | null;
    readonly name: string | null;
    readonly location: {
        readonly addresses: ReadonlyArray<{
            readonly address: string | null;
        }> | null;
    };
    readonly " $refType": "LocationInstanceItem_locationInstance";
};
export type LocationInstanceItem_locationInstance$data = LocationInstanceItem_locationInstance;
export type LocationInstanceItem_locationInstance$key = {
    readonly " $data"?: LocationInstanceItem_locationInstance$data;
    readonly " $fragmentRefs": FragmentRefs<"LocationInstanceItem_locationInstance">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "LocationInstanceItem_locationInstance",
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
      "kind": "ScalarField",
      "name": "mainPhotoLink",
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
      "concreteType": "Location",
      "kind": "LinkedField",
      "name": "location",
      "plural": false,
      "selections": [
        {
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
        }
      ],
      "storageKey": null
    }
  ],
  "type": "LocationInstance",
  "abstractKey": null
};
(node as any).hash = '1a6388272745b9817dfea235122c6d60';
export default node;
