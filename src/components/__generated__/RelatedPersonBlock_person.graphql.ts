/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type RelatedPersonBlock_person = {
    readonly id: string;
    readonly lastName: string | null;
    readonly firstName: string | null;
    readonly patronymic: string | null;
    readonly mainPhotoLink: string | null;
    readonly " $refType": "RelatedPersonBlock_person";
};
export type RelatedPersonBlock_person$data = RelatedPersonBlock_person;
export type RelatedPersonBlock_person$key = {
    readonly " $data"?: RelatedPersonBlock_person$data;
    readonly " $fragmentRefs": FragmentRefs<"RelatedPersonBlock_person">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RelatedPersonBlock_person",
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
(node as any).hash = 'b4a7af84d1912b7251efef660b5ea78a';
export default node;
