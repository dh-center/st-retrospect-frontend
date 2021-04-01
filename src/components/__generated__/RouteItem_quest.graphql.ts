/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type RouteItem_quest = {
    readonly id: string;
    readonly name: string;
    readonly photo: string | null;
    readonly " $refType": "RouteItem_quest";
};
export type RouteItem_quest$data = RouteItem_quest;
export type RouteItem_quest$key = {
    readonly " $data"?: RouteItem_quest$data;
    readonly " $fragmentRefs": FragmentRefs<"RouteItem_quest">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RouteItem_quest",
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
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "photo",
      "storageKey": null
    }
  ],
  "type": "Quest",
  "abstractKey": null
};
(node as any).hash = '726e4495ca657528d1f81963dc8e6e9e';
export default node;
