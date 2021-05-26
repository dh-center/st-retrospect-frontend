/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type PersonItem_person = {
    readonly id: string;
    readonly lastName: string | null;
    readonly firstName: string | null;
    readonly patronymic: string | null;
    readonly mainPhotoLink: string | null;
    readonly " $refType": "PersonItem_person";
};
export type PersonItem_person$data = PersonItem_person;
export type PersonItem_person$key = {
    readonly " $data"?: PersonItem_person$data;
    readonly " $fragmentRefs": FragmentRefs<"PersonItem_person">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PersonItem_person",
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
      "name": "lastName",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "firstName",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "patronymic",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "mainPhotoLink",
      "storageKey": null
    }
  ],
  "type": "Person",
  "abstractKey": null
};
(node as any).hash = '881f59e8cab375d15f2685a081cb8429';
export default node;
