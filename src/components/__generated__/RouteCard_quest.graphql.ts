/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type RouteCard_quest = {
    readonly name: string;
    readonly photo: string | null;
    readonly " $refType": "RouteCard_quest";
};
export type RouteCard_quest$data = RouteCard_quest;
export type RouteCard_quest$key = {
    readonly " $data"?: RouteCard_quest$data;
    readonly " $fragmentRefs": FragmentRefs<"RouteCard_quest">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RouteCard_quest",
  "selections": [
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
(node as any).hash = 'c7c910dcffc154ed2101d21196b5fd93';
export default node;
