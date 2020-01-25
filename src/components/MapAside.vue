<template>
  <aside class="map-aside">
    <header class="map-aside__header">
      <div class="map-aside__header-top">
        <SiteLogo class="map-aside__logo" />
        <LanguageSelect class="map-aside__language-select" />
      </div>
      <div class="map-aside__search-form">
        <SearchLine
          v-model="searchString"
          class="map-aside__search-line"
        />
        <button
          class="button button--search map-aside__search-button"
          @click="findLocations"
        >
          {{ $t('search-button') }}
          <svg
            v-svg
            symbol="arrow-right"
          />
        </button>
      </div>
    </header>
    <div class="map-aside__content">
      <LocationInfo
        v-for="location in locationsList"
        :key="location.ids"
        class="map-aside__location-info"
        :location="location"
      />
    </div>
    <TheFooter />
  </aside>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SiteLogo from '@/components/SiteLogo.vue';
import LanguageSelect from '@/components/LanguageSelect.vue';
import SearchLine from '@/components/SearchLine.vue';
import LocationInfo from '@/components/LocationInfo.vue';
import TheFooter from '@/components/TheFooter.vue';
import LocationCard from '@/components/LocationCard.vue';
import { State } from 'vuex-class';
// eslint-disable-next-line no-unused-vars
import Location from '@/types/location';
import PersonCard from '@/components/PersonCard.vue';
import { SEARCH_FOR_LOCATIONS } from '@/store/modules/app/actionTypes';

@Component({
  components: {
    PersonCard,
    LocationCard,
    SiteLogo,
    LanguageSelect,
    SearchLine,
    LocationInfo,
    TheFooter
  }
})
/**
 * Aside bar of Map View
 */
export default class MapAside extends Vue {
  /**
   * Locations list to display
   */
  @State(state => state.app.searchResult)
  private locationsList!: Location[] | null;

  /**
   * Search string for finding locations
   */
  private searchString: string = '';

  /**
   * Find locations by query in search line
   */
  private async findLocations(): Promise<void> {
    await this.$store.dispatch(SEARCH_FOR_LOCATIONS, this.searchString);
  }
}
</script>

<i18n>
{
  "en": {
    "search-button": "Search"
  },
  "ru": {
    "search-button": "Найти"
  }
}
</i18n>

<style>
@import '../styles/custom-properties.css';

.map-aside {
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;

  width: 450px;
  height: 100%;
  overflow: hidden;

  background-color: #2d2d2d;

  &__header {
    padding: 10px 30px;
  }

  &__header-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  &__language-select {
    color: #7c7c7c;
  }

  &__search-form {
    display: flex;
  }

  &__search-line {
    width: 100%;
    margin-right: 18px;
  }

  &__search-button {
    min-width: 117px;
    height: 50px;

    font-size: 18px;

    text-transform: none;

    svg {
      width: 20px;
      height: 10px;
    }
  }

  &__content {
    @apply --custom-scroll;
    width: 100%;
    overflow: auto;

    background-color: #fff;
  }

  &__location-info {
    height: 90px;

    cursor: pointer;
  }
}
</style>
