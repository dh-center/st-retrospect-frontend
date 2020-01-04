<template>
  <aside class="map-aside">
    <div class="map-aside__header-top">
      <SiteLogo class="map-aside__logo" />
      <LanguageSelect class="map-aside__language-select" />
    </div>
    <div class="map-aside__search-form">
      <SearchLine class="map-aside__search-line" />
      <button class="button button--search map-aside__search-button">
        {{ $t('search-button') }}
        <svg
          v-svg
          symbol="arrow-right"
        />
      </button>
    </div>
  </aside>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import SiteLogo from '@/components/SiteLogo.vue';
import LanguageSelect from '@/components/LanguageSelect.vue';
import SearchLine from '@/components/SearchLine.vue';

@Component({
  components: {
    SiteLogo,
    LanguageSelect,
    SearchLine
  }
})
/**
 * Aside bar of Map View
 */
export default class MapAside extends Vue {}
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
.map-aside {
  position: absolute;
  top: 0;
  left: 0;

  width: 450px;
  height: 100%;
  padding: 10px 30px;

  background-color: #2d2d2d;

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
}
</style>
