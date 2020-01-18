<template>
  <div>
    <div id="mapContainer">
      <div v-if="map">
        <MapMarker
          v-for="location in filteredLocationsList"
          :key="location.id"
          :map="map"
          :lng-lat="[location.longitude, location.latitude]"
          location-type="actor-home"
        />
      </div>
    </div>
    <MapAside />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import mapboxgl from 'mapbox-gl';
import MapAside from '@/components/MapAside.vue';
import MapMarker from '@/components/MapMarker.vue';
import { State } from 'vuex-class';
// eslint-disable-next-line no-unused-vars
import Location from '@/types/location';

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
   * Locations list to display
   */
  @State(state => state.app.searchResult)
  private locationsList!: Location[] | null;

  /**
   * Returns only locations with non-empty latitude and longitude fields
   */
  get filteredLocationsList() {
    return this.locationsList?.filter(location => location.latitude && location.longitude);
  }

  /**
   * Vue mounted hook
   * Setups Map for displaying
   */
  mounted() {
    this.map = new mapboxgl.Map({
      container: 'mapContainer',
      style: 'mapbox://styles/dandriver/ck0epf0pe0qh51cr3ecw3v65y',
      center: [30.28617, 59.93944],
      zoom: 12,
      logoPosition: 'top-right'
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
