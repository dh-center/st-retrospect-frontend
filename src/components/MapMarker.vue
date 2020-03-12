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
      :relation="relation"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import mapboxgl from 'mapbox-gl';
import MapPopup from '@/components/MapPopup.vue';
// eslint-disable-next-line no-unused-vars
import Relation from '@/types/relation';
// eslint-disable-next-line no-unused-vars
import { Route } from 'vue-router';

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
   * Unique ID of marker point HTML element
   */
  private markerElementId: string = this.$id('marker');

  /**
   * Unique ID of popup HTML element
   */
  private popupElementId: string = this.$id('popup');

  /**
   * MapboxGL marker instance
   */
  private marker?: mapboxgl.Marker;

  /**
   * MapboxGL popup instance
   */
  private popup: mapboxgl.Popup = new mapboxgl.Popup({
    anchor: 'bottom',
    offset: 25,
    maxWidth: '300px'
  });

  /**
   * MapboxGL map for adding marker
   */
  @Prop({ type: mapboxgl.Map, required: true })
  private map!: mapboxgl.Map;

  /**
   * Relation object for marker
   */
  @Prop({ type: Object, required: true })
  private relation!: Relation;

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
    this.popup.setDOMContent(document.getElementById(this.popupElementId) as HTMLElement);
    this.marker = new mapboxgl.Marker({
      element: document.getElementById(this.markerElementId) as HTMLElement
    })
      .setLngLat([this.relation.locationInstance.location.longitude as number, this.relation.locationInstance.location.latitude as number])
      .setPopup(this.popup)
      .addTo(this.map);

    /**
     * Event handler for opening popup
     */
    this.popup.on('open', () => {
      /**
       * Show info about location:
       * If open location popup when current route is '/map/';
       * If open location popup when old location popup was opened (current route is '/location/:id'.
       */
      if (this.$router.currentRoute.name === 'map' || (this.$router.currentRoute.name === 'locationInfo' && this.$router.currentRoute.params.id !== this.relation.locationInstance.id)) {
        this.showLocationInfo();
      }
    });
    /**
     * Event handler for closing popup
     */
    this.popup.on('close', () => {
      /**
       * Return to search results:
       * If close location popup and doesn't open new location popup.
       */
      if (this.$router.currentRoute.name === 'locationInfo' && this.$router.currentRoute.params.id === this.relation.locationInstance.id) {
        this.returnToSearchResults();
      }
    });
  }

  /**
   * Shows information about location in aside bar
   */
  private showLocationInfo() {
    this.$router.push({
      name: 'locationInfo',
      params: {
        id: this.relation.locationInstance.id
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

  /**
   * Change route handler
   * @param to - new location
   * @param from - old location
   */
  @Watch('$route')
  private onRouteChange(to:Route, from:Route): void {
    if (to.name !== 'locationInfo') {
      if (this.popup.isOpen()) {
        this.popup.remove();
      }
      return;
    }
    if (to.params.id === this.relation.locationInstance.id) {
      this.popup.addTo(this.map);
    } else if (this.popup.isOpen()) {
      this.popup.remove();
    }
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
