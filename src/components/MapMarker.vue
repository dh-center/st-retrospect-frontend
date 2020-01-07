<template>
  <div class="marker-block" />
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
   * Vue mounted hook
   * Setups marker for displaying
   */
  mounted() {
    this.marker = new mapboxgl.Marker()
      .setLngLat(this.lngLat)
      .addTo(this.map);
  }
}
</script>
