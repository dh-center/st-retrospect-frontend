<template>
  <div
    :id="markerElementId"
    class="marker"
  >
    <svg
      v-svg
      :symbol="locationType"
    />
    <MapPopup
      :id="popupElementId"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import mapboxgl from 'mapbox-gl';
import MapPopup from '@/components/MapPopup.vue';

@Component({
  components: {
    MapPopup
  }
})
/**
 * Component of marker on map
 */
export default class MapMarker extends Vue {
    /**
     * MapboxGL marker instance
     */
    private marker?: mapboxgl.Marker;

    /**
     * MapboxGL popup instance
     */
    private popup?: mapboxgl.Popup;

    /**
     * Unique ID of marker point HTML element
     */
    private markerElementId: string = this.$id('marker');

    /**
     * Unique ID of popup HTML element
     */
    private popupElementId: string = this.$id('popup');

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
     * Type of location
     */
    @Prop({ type: String, required: true })
    private locationType!: string;

    /**
     * Vue mounted hook
     * Setups marker for displaying
     */
    mounted() {
      this.popup = new mapboxgl.Popup({
        anchor: 'bottom',
        offset: 25,
        maxWidth: '300px'
      })
        .setDOMContent(document.getElementById(this.popupElementId) as HTMLElement)
        .addTo(this.map);
      this.marker = new mapboxgl.Marker({
        element: document.getElementById(this.markerElementId) as HTMLElement
      })
        .setLngLat(this.lngLat)
        .setPopup(this.popup)
        .addTo(this.map);
    }
}
</script>

<style>
  .marker {
    width: 30px;
    height: 40px;

    cursor: pointer;

    svg {
      position: relative;
      top: -20px;

      width: 30px;
      height: 40px;
    }
  }
</style>
