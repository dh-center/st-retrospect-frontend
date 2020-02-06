<template>
  <aside class="map-aside">
    <header class="map-aside__header">
      <div class="map-aside__header-top">
        <SiteLogo class="map-aside__logo" />
        <LanguageSelect class="map-aside__language-select" />
      </div>
      <form
        class="map-aside__search-form"
        @submit.prevent="findRelations"
      >
        <SearchLine
          v-model="searchString"
          class="map-aside__search-line"
        />
        <button
          class="button button--search map-aside__search-button"
          type="submit"
        >
          {{ $t('search-button') }}
          <svg
            v-svg
            symbol="arrow-right"
          />
        </button>
      </form>
      <router-link
        v-if="$route.name !== 'map'"
        class="map-aside__back-link"
        :to="{
          name: 'map'
        }"
      >
        {{ $t('back') }}
      </router-link>
    </header>
    <router-view class="map-aside__content" />
    <TheFooter />
  </aside>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SiteLogo from '@/components/SiteLogo.vue';
import LanguageSelect from '@/components/LanguageSelect.vue';
import SearchLine from '@/components/SearchLine.vue';
import RelationInfo from '@/components/RelationInfo.vue';
import TheFooter from '@/components/TheFooter.vue';
import LocationCard from '@/components/LocationCard.vue';
import PersonCard from '@/components/PersonCard.vue';
import { SEARCH_FOR_RELATIONS, UPDATE_LAST_SEARCH_QUERY } from '@/store/modules/app/actionTypes';

@Component({
  components: {
    PersonCard,
    LocationCard,
    SiteLogo,
    LanguageSelect,
    SearchLine,
    RelationInfo,
    TheFooter
  }
})
/**
 * Aside bar of Map View
 */
export default class MapAside extends Vue {
  /**
   * Search string for finding locations
   */
  private searchString: string = this.$store.state.app.lastSearchQuery || '';

  /**
   * Find locations by query in search line
   */
  private async findRelations(): Promise<void> {
    if (this.searchString) {
      await this.$store.dispatch(UPDATE_LAST_SEARCH_QUERY, this.searchString);
      await this.$store.dispatch(SEARCH_FOR_RELATIONS, this.searchString);
      if (this.$router.currentRoute.params.searchString !== this.searchString) {
        await this.$router.replace({
          params: {
            searchString: this.searchString
          }
        });
      }
    }
  }

  /**
   * Vue lifecycle hook
   * Using to fetch info from API
   */
  async created() {
    if (this.$router.currentRoute.params.searchString !== this.$store.state.app.lastSearchQuery) {
      await this.$store.dispatch(UPDATE_LAST_SEARCH_QUERY, this.$router.currentRoute.params.searchString);
      this.searchString = this.$router.currentRoute.params.searchString;
    }
    this.findRelations();
  }
}
</script>

<i18n>
{
  "en": {
    "search-button": "Search",
    "back": "Back to the search results"
  },
  "ru": {
    "search-button": "Найти",
    "back": "Назад к результатам поиска"
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
    margin-bottom: 10px;
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

  &__back-link {
    width: 100%;

    color: #fff;
    font-size: 12px;
    line-height: 14px;
  }

  &__content {
    @apply --custom-scroll;
    width: 100%;
    height: 100%;
    overflow: auto;

    background-color: #fff;
  }
}
</style>
