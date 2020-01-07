<template>
  <div
    :id="markerElementId"
    class="marker-block"
  >
    <svg
      v-svg
      :symbol="markerSvgName"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import mapboxgl from 'mapbox-gl';

  @Component
  /**
   * Component of marker on map
   */
export default class MapMarker extends Vue {
  /**
   * MapboxGL marker instance
   */
  private marker?: mapboxgl.Marker;

  /**
   * Unique ID of marker pint HTML element
   */
  private markerElementId: string = this.$id('marker-point');

  /**
   * MapboxGL map for adding marker
   */
  @Prop({ type: mapboxgl.Map, required: true })
  private map!: mapboxgl.Map;

  /**
   * Coordinates of marker
   */
  @Prop({ type: Array, required: true })
  private lngLat!: [number, number];

  /**
   * Point svg name
   */
  @Prop({ type: String, required: true })
  private markerSvgName!: string;

  /**
   * Vue mounted hook
   * Setups marker for displaying
   */
  mounted() {
    this.marker = new mapboxgl.Marker({
      element: document.getElementById(this.markerElementId) as HTMLElement
    })
      .setLngLat(this.lngLat)
      .addTo(this.map);
  }
}
</script>

<style>
  .marker-block {
    width: 30px;
    height: 40px;

    svg {
      position: relative;
      top: -20px;

      width: 30px;
      height: 40px;
    }
  }
</style>
