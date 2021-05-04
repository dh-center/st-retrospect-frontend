/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CurrentMapContentContextLocation = ReadonlyArray<{
    readonly longitude: number | null;
    readonly latitude: number | null;
    readonly " $refType": "CurrentMapContentContextLocation";
}>;
export type CurrentMapContentContextLocation$data = CurrentMapContentContextLocation;
export type CurrentMapContentContextLocation$key = ReadonlyArray<{
    readonly " $data"?: CurrentMapContentContextLocation$data;
    readonly " $fragmentRefs": FragmentRefs<"CurrentMapContentContextLocation">;
}>;



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "CurrentMapContentContextLocation",
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
  "type": "Location",
  "abstractKey": null
};
(node as any).hash = 'a9017464524e801407c3099034550112';
export default node;
