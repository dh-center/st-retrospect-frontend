<template>
  <div>
    <MglMap
      ref="map"
      :access-token="accessToken"
      :map-style.sync="mapStyle"
      :center="[30.28617, 59.93944]"
      :zoom="12"
      logo-position="top-right"
      class="map"
    >
      <MglRelationCard
        v-for="(relation, relationKey) in filteredLocationsList"
        :key="relationKey"
        :relation="relation"
      />
    </MglMap>
    <MapAside />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
// eslint-disable-next-line no-unused-vars
import { MglMap, MglMarker, MglPopup } from 'vue-mapbox';
import MglRelationCard from '@/components/MglRelationCard.vue';
import MapAside from '@/components/MapAside.vue';
import { State } from 'vuex-class';
// eslint-disable-next-line no-unused-vars
import Relation from '@/types/relation';

@Component({
  components: {
    MapAside,
    MglMap,
    MglRelationCard
  }
})
/**
 * View for showing city map
 */
export default class MapView extends Vue {
  /**
   * Types for $refs
   */
  $refs!: {
    map: any
  };

  /**
   * Locations list to display
   */
  @State(state => state.app.searchResult)
  private relationsList!: Relation[] | null;

  /**
   * Returns only relations with non-empty latitude and longitude fields
   */
  get filteredLocationsList() {
    return this.relationsList?.filter(relation => relation.locationInstance.location.latitude && relation.locationInstance.location.longitude);
  }

  /**
   * Return access token for mapbox
   */
  get accessToken(): string {
    return process.env.VUE_APP_MAPBOX_ACCESS_TOKEN as string;
  }

  /**
   * Return map style
   */
  get mapStyle(): string {
    return 'mapbox://styles/dandriver/ck0epf0pe0qh51cr3ecw3v65y';
  }

  /**
   * Move map to location or to center of St.Petersburg by route changes
   */
  @Watch('$route')
  private async onRouteChange(): Promise<void> {
    if (!this.$refs.map) {
      return;
    }
    if (this.$router.currentRoute.name === 'locationInfo') {
      const currentLocationInstanceId = this.$router.currentRoute.params.id || null;

      if (!currentLocationInstanceId) {
        return;
      }
      const currentRelation = this.relationsList?.find(relation => relation.locationInstance.id === currentLocationInstanceId);

      if (currentRelation && currentRelation.locationInstance.location.longitude && currentRelation.locationInstance.location.latitude) {
        this.$refs.map.map.flyTo({
          center: [
            currentRelation.locationInstance.location.longitude,
            currentRelation.locationInstance.location.latitude + 0.002
          ],
          zoom: 14
        });
      }
    }
    if (this.$router.currentRoute.name === 'map') {
      this.$refs.map.map.flyTo({
        center: [30.28617, 59.93944],
        zoom: 12
      });
    }
  }
}
</script>

<style>
  .map {
    position: absolute;
    top: 0;
    bottom: 0;

    width: 100%;
  }
</style>
