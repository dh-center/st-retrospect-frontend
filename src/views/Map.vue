<template>
  <div>
    <div id="mapContainer">
      <MapMarker
        v-if="map"
        :map="map"
        :lng-lat="[30.28617, 59.93944]"
      />
      <MapMarker
        v-if="map"
        :map="map"
        :lng-lat="[30.29617, 59.93944]"
      />
      <MapMarker
        v-if="map"
        :map="map"
        :lng-lat="[30.27617, 59.93944]"
      />
    </div>
    <MapAside />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import mapboxgl from 'mapbox-gl';
import MapAside from '@/components/MapAside.vue';
import MapMarker from '@/components/MapMarker.vue';

mapboxgl.accessToken = process.env.VUE_APP_MAPBOX_ACCESS_TOKEN as string;

@Component({
  components: {
    MapAside,
    MapMarker
  }
})
/**
 * View for showing city map
 */
export default class MapView extends Vue {
  /**
   * MapboxGL map instance
   */
  private map?: mapboxgl.Map | null = null;

  /**
   * Vue mounted hook
   * Setups Map for displaying
   */
  mounted() {
    this.map = new mapboxgl.Map({
      container: 'mapContainer',
      style: 'mapbox://styles/dandriver/ck0epf0pe0qh51cr3ecw3v65y',
      center: [30.28617, 59.93944],
      zoom: 12
    });
  }
}
</script>

<style src="mapbox-gl/dist/mapbox-gl.css">
</style>

<style>
  #mapContainer {
    position: absolute;
    top: 0;
    bottom: 0;

    width: 100%;
  }
</style>
