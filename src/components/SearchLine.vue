<template>
  <div class="search-line">
    <label
      class="search-line__label"
      :for="$id('input')"
    >{{ $t('search') }}</label>
    <input
      :id="$id('input')"
      :value="value"
      class="search-line__input"
      type="text"
      @input="$emit('input', $event.target.value)"
    >
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
/**
 * Search line for searching persons, location, etc
 * Used in Aside bar of the Map view
 */
export default class SearchLine extends Vue {
  @Prop({
    type: String,
    default: ''
  })
  /**
   * Value of the search line for binding
   */
  private value!: string;
}
</script>

<i18n>
{
  "en": {
    "search": "Search"
  },
  "ru": {
    "search": "Поиск"
  }
}
</i18n>

<style>
.search-line {
  position: relative;

  &__label {
    position: absolute;

    color: #7c7c7c;
    font-size: 8px;
    line-height: 9px;
    letter-spacing: .2em;
    text-transform: uppercase;
  }

  &__input {
    width: 100%;
    height: 50px;
    padding-right: 20px;

    color: #fff;
    font-size: 16px;
    line-height: 19px;

    background-color: transparent;
    border: none;
    border-bottom: 1px solid #fff;
    outline: none;
  }
}
</style>
