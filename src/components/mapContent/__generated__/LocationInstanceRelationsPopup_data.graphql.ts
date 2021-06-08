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
        readonly relationType: {
            readonly id: string;
            readonly name: string;
        };
        readonly " $fragmentRefs": FragmentRefs<"RelationCard_relation">;
    }>;
    readonly " $refType": "LocationInstanceRelationsPopup_data";
};
export type LocationInstanceRelationsPopup_data$data = LocationInstanceRelationsPopup_data;
export type LocationInstanceRelationsPopup_data$key = {
    readonly " $data"?: LocationInstanceRelationsPopup_data$data;
    readonly " $fragmentRefs": FragmentRefs<"LocationInstanceRelationsPopup_data">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
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
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "Relation",
      "kind": "LinkedField",
      "name": "relations",
      "plural": true,
      "selections": [
        (v1/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "RelationType",
          "kind": "LinkedField",
          "name": "relationType",
          "plural": false,
          "selections": [
            (v1/*: any*/),
            (v0/*: any*/)
          ],
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
})();
(node as any).hash = '727e948d4486689f714f6418e672aefa';
export default node;
