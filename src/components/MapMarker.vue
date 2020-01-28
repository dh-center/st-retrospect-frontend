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
      :location="location"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import mapboxgl from 'mapbox-gl';
import MapPopup from '@/components/MapPopup.vue';
// eslint-disable-next-line no-unused-vars
import Location from '@/types/location';

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
   * Location object for marker
   */
  @Prop({ type: Object, required: true })
  private location!: Location;

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
      .setDOMContent(document.getElementById(this.popupElementId) as HTMLElement);
    this.marker = new mapboxgl.Marker({
      element: document.getElementById(this.markerElementId) as HTMLElement
    })
      .setLngLat([this.location.longitude as number, this.location.latitude as number])
      .setPopup(this.popup)
      .addTo(this.map);

    this.popup.on('open', () => this.showLocationInfo());
    this.popup.on('close', () => this.returnToSearchResults());
  }

  /**
   * Shows information about location in aside bar
   */
  private showLocationInfo() {
    this.$router.push({
      name: 'locationInfo',
      params: {
        id: this.location.id
      }
    });
  }

  /**
   * Return to search results when popup is close
   */
  private returnToSearchResults() {
    this.$router.push({
      name: 'map'
    });
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
