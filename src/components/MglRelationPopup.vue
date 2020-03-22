<template>
  <MglPopup
    anchor="bottom"
    :offset="25"
    @open="onPopupOpen"
    @close="onPopupClose"
  >
    <div class="popup">
      <h3 class="popup__title">
        {{ relation.locationInstance.name }}
      </h3>
      <p class="popup__location-type">
        {{ relation.locationInstance.locationTypes[0].name }}
      </p>
      <p class="popup__address">
        {{ locationAddress }}
      </p>
      <p class="popup__quote">
        {{ relation.quote }}
      </p>
    </div>
  </MglPopup>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
// eslint-disable-next-line no-unused-vars
import Relation from '@/types/relation';
import { MglPopup } from 'vue-mapbox';

@Component({
  components: {
    MglPopup
  }
})
/**
 * Component of popup on map
 */
export default class MglRelationPopup extends Vue {
  /**
   * Relation object for popup
   */
  @Prop({ type: Object, required: true })
  private relation!: Relation;

  /**
   * Get location address in one string
   */
  get locationAddress(): string {
    const locationAddresses = this.relation.locationInstance.location.addresses;

    if (locationAddresses && locationAddresses.length) {
      return `${locationAddresses[0].street} ` +
        `${locationAddresses[0].build} ` +
        `${locationAddresses[0].homeNumber} ` +
        `${locationAddresses[0].housing}`.replace(/\s{2,}/g, ' ');
    }
    return '';
  }

  /**
   * Event handler for opening popup
   */
  private onPopupOpen(): void {
    /**
     * Show info about location:
     * If open location popup when current route is '/map/';
     * If open location popup when old location popup was opened (current route is '/location/:id'.
     */
    if (this.$router.currentRoute.name === 'map' || (this.$router.currentRoute.name === 'locationInfo' && this.$router.currentRoute.params.id !== this.relation.locationInstance.id)) {
      this.showLocationInfo();
    }
  }

  /**
   * Event handler for closing popup
   */
  private onPopupClose(): void {
    /**
     * Return to search results:
     * If close location popup and doesn't open new location popup.
     */
    if (this.$router.currentRoute.name === 'locationInfo' && this.$router.currentRoute.params.id === this.relation.locationInstance.id) {
      this.returnToSearchResults();
    }
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
}
</script>

<style>
  @import '../styles/custom-properties.css';

  .mapboxgl-popup {
    max-width: 300px !important;
  }

  .popup {
    padding: 0px 15px;

    &__title {
      @apply --font-serif-main;
      margin: 10px 0;

      color: #2D2D2D;
      font-weight: 400;
      font-size: 18px;
      line-height: 18px;
    }

    &__location-type {
      @apply --font-sans-serif-light;
      margin: 0;

      color: #7c7c7c;
      font-size: 14px;
      line-height: 16px;
    }

    &__address, &__quote {
      @apply --font-sans-serif-light;
      margin-top: 0;

      color: #2D2D2D;
      font-size: 14px;
      line-height: 16px;
    }

    &__quote {
      @apply --custom-scroll;
      max-height: 200px;
      margin-top: 10px;
      padding-right: 10px;
      overflow-y: scroll;

      line-height: 20px;
    }
  }
</style>
