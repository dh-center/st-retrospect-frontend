<template>
  <MglMarker
    :coordinates="relationCoordinates(relation)"
  >
    <svg
      slot="marker"
      v-svg
      :symbol="'museum'"
      class="mapboxgl-marker__icon"
    />
    <MglRelationPopup
      :relation="relation"
    />
  </MglMarker>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
// eslint-disable-next-line no-unused-vars
import Relation from '@/types/relation';
import { MglMarker } from 'vue-mapbox';
import MglRelationPopup from '@/components/MglRelationPopup.vue';

@Component({
  components: {
    MglRelationPopup,
    MglMarker
  }
})
/**
 * Relation card component for mapbox map
 * Represents marker and popup
 */
export default class MglRelationCard extends Vue {
  /**
   * Relation object for marker
   */
  @Prop({ type: Object, required: true })
  private relation!: Relation;

  /**
   * Return array of coordinates
   */
  private relationCoordinates(relation: Relation): [number, number] {
    return [relation.locationInstance.location.longitude,
      relation.locationInstance.location.latitude];
  }
}
</script>

<style src="mapbox-gl/dist/mapbox-gl.css">
</style>

<style>
  .mapboxgl-marker {
    position: absolute;

    top: -20px;

    width: 30px;
    height: 40px;

    cursor: pointer;

    &__icon {
      width: 30px;
      height: 40px;
    }
  }
</style>
