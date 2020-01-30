<template>
  <div>
    <div id="mapContainer">
      <div v-if="map">
        <MapMarker
          v-for="location in filteredLocationsList"
          :key="location.id"
          :map="map"
          :location="location"
          location-type="actor-home"
        />
      </div>
    </div>
    <MapAside />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import mapboxgl from 'mapbox-gl';
import MapAside from '@/components/MapAside.vue';
import MapMarker from '@/components/MapMarker.vue';
import { State } from 'vuex-class';
// eslint-disable-next-line no-unused-vars
import Location from '@/types/location';
import * as locationsApi from '@/api/locations';

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

  /**
   * Move map to location or to center of St.Petersburg by route changes
   */
  @Watch('$route')
  private async onRouteChange(): Promise<void> {
    if (!this.map) {
      return;
    }
    if (this.$router.currentRoute.name === 'locationInfo') {
      const currentLocationId = this.$router.currentRoute.params.id || null;

      if (!currentLocationId) {
        return;
      }
      const locationCoordinates = await locationsApi.getLocationCoordinates(currentLocationId);

      if (locationCoordinates && locationCoordinates.longitude && locationCoordinates.latitude) {
        this.map.flyTo({
          center: [
            locationCoordinates.longitude,
            locationCoordinates.latitude + 0.002
          ],
          zoom: 14
        });
      }
    }
    if (this.$router.currentRoute.name === 'map') {
      this.map.flyTo({
        center: [30.28617, 59.93944],
        zoom: 12
      });
    }
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
