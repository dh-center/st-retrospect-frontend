<template>
  <aside
    class="aside"
    :class="{'aside--opened': isOpen}"
  >
    <div class="aside__header">
      <SiteLogo />
      <LanguageSelect />
    </div>
    <div class="aside__search">
      <SearchLine />
    </div>
    <div class="aside__line">
      <CustomSelect
        :options="['писатель', 'художник', 'скульптор', 'водитель', 'алкоголик', 'хто я?']"
      />
      <button class="aside__search-button">
        {{ $t('search') }}
      </button>
    </div>
    <div class="aside__years">
      <div class="aside__years-label">
        {{ $t('yearsFilterLabel') }}
      </div>
      <Range
        :min="minYear"
        :max="maxYear"
        :on-change="onRangeChange"
        :values="{
          valueA: searchData.filters.startYear,
          valueB: searchData.filters.endYear
        }"
      />
      <div class="aside__years-inputs">
        <input
          value="1700"
          type="number"
          :min="minYear"
          :max="maxYear"
          class="aside__years-input"
        >
        –
        <input
          value="2021"
          type="number"
          :min="minYear"
          :max="maxYear"
          class="aside__years-input"
        >
      </div>
    </div>
    <div
      class="aside__open-button"
      @click="isOpen=!isOpen"
    >
      <svg
        v-svg
        symbol="arrow-left"
        class="arrow"
        :class="{
          'arrow--left': isOpen,
          'arrow--right': !isOpen
        }"
      />
    </div>
  </aside>
</template>

<i18n>
{
  "en": {
    "search": "Search",
    "yearsFilterLabel": "Years period"
  },
  "ru": {
    "search": "Поиск",
    "yearsFilterLabel": "Временной промежуток"
  }
}
</i18n>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import SiteLogo from '@/components/SiteLogo.vue';
import LanguageSelect from '@/components/LanguageSelect.vue';
import SearchLine from '@/components/SearchLine.vue';
import CustomSelect from '@/components/CustomSelect.vue';
import Range from '@/components/Range.vue';

@Component({
  components: {
    SiteLogo,
    LanguageSelect,
    SearchLine,
    CustomSelect,
    Range
  }
})
/**
 * Aside bar
 */
export default class Aside extends Vue {
  /**
   * Is aside open or closed
   */
  private isOpen: boolean = true;

  /**
   * Minimum year
   */
  private minYear: string = '1700';
  /**
   * Maximum year
   */
  private maxYear: string = '2021';

  /**
   * Form data for search
   *
   * @private
   */
  private searchData: {
    query: string,
    filters: {
      startYear: string,
      endYear: string
    }
  } = {
    query: '',
    filters: {
      startYear: this.minYear,
      endYear: this.maxYear
    }
  };

  /**
   * Handler for changes in years range
   *
   * @param values - new values in range
   */
  private onRangeChange = (values: { valueA: string, valueB: string }): void => {
    this.searchData = {
      ...this.searchData,
      filters: {
        ...this.searchData.filters,
        startYear: values.valueA,
        endYear: values.valueB
      }
    };
  };
}
</script>

<style>
@import '../styles/variables.css';
@import '../styles/custom-properties.css';

:root {
  --aside__open-button-width: 48px;
}

.aside {
  @apply --box-shadow-main;
  position: absolute;
  top: 0;
  left: 0;

  width: 372px;
  height: 100vh;
  padding: 20px 16px;

  background: var(--color-bg-main);
  transform: translateX(-100%);

  transition: .5s;

  &--opened {
    transform: translateX(0%);
  }

  &__header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 25px;
    padding-bottom: 3px;

    border-bottom: 2px solid var(--color-gray-main);
  }

  &__open-button {
    position: absolute;
    top: 16px;
    right: calc(-1 * var(--aside__open-button-width));

    display: flex;
    align-items: center;
    justify-content: center;

    width: var(--aside__open-button-width);
    height: 48px;

    background: var(--color-bg-main);
    border-radius: 0 2px 2px 0;
    cursor: pointer;
    opacity: .8;

    .arrow {
      width: 8px;
      height: 14px;

      transition: .5s;

      &--left {
        transform: rotate(0deg);
      }

      &--right {
        transform: rotate(180deg);
      }
    }
  }

  &__search-button {
    @apply(--font-sans-serif-main);
    @apply(--box-shadow-medium);

    width: 103px;

    color: var(--color-white);
    font-size: 14px;

    background: var(--color-gray-main);
    border: none;
    border-radius: 2px;
    outline: none;
    cursor: pointer;
  }

  &__line {
    display: flex;
    flex-direction: row;
    margin-bottom: 12px;
  }

  &__years {
    @apply(--font-sans-serif-light);

    padding-top: 12px;

    color: var(--color-gray-main);

    user-select: none;
  }

  &__years-label {
    margin-bottom: 12px;
  }

  &__years-inputs {
    margin-top: 12px;
  }

  &__years-input {
    @apply(--font-sans-serif-light);
    position: relative;

    box-sizing: border-box;

    width: 102px;
    height: 36px;

    color: var(--color-gray-main);

    text-align: center;

    border: .5px solid #F2F2F2;
    border-radius: 2px;
    outline: none;

    /** Remove arrows in number input field in Mozilla Firefox */
    -moz-appearance: textfield;

    /** Remove arrows in number input field in Webkit */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      margin: 0;

      -webkit-appearance: none;
    }
  }
}
</style>
