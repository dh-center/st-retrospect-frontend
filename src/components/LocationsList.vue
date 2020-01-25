<template>
  <div
    class="locations-list"
  >
    <div
      v-if="locationsList && locationsList.length"
    >
      <LocationInfo
        v-for="location in locationsList"
        :key="location.id"
        class="locations-list__location-info"
        :location="location"
        @click="showLocationInfo(location.id)"
      />
    </div>
    <div
      v-else
      class="locations-list__not-found-message"
    >
      {{ $t('not-found') }}
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { State } from 'vuex-class';
// eslint-disable-next-line no-unused-vars
import Location from '../types/location';
import LocationInfo from '@/components/LocationInfo.vue';

@Component({
  components: {
    LocationInfo
  }
})
/**
 * Locations list for displaying in Aside bar
 */
export default class LocationsList extends Vue {
  /**
   * Locations list to display
   */
  @State(state => state.app.searchResult)
  private locationsList!: Location[] | null;

  /**
   * Shows information about location in aside bar
   */
  private showLocationInfo(locationId: string) {
    this.$router.push({
      name: 'locationInfo',
      params: {
        id: locationId
      }
    });
  }
}
</script>

<i18n>
{
  "en": {
    "not-found": "Sorry, no results were found for your request"
  },
  "ru": {
    "not-found": "Извините, по вашему запросу ничего не найдено"
  }
}
</i18n>

<style>
  @import '../styles/custom-properties.css';

  .locations-list {
    @apply --custom-scroll;
    width: 100%;
    height: 100%;
    overflow: auto;

    background-color: #fff;

    &__location-info {
      height: 90px;

      cursor: pointer;
    }

    &__not-found-message {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;

      background-color: #fff;
    }
  }
</style>
