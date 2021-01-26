<template>
  <div class="search-line">
    <div class="search-line__menu-button">
      <svg
        v-svg
        symbol="menu"
      />
    </div>
    <input
      :id="$id('input')"
      :value="value"
      class="search-line__input"
      type="text"
      :placeholder="$t('inputPlaceholder')"
      @input="$emit('input', $event.target.value)"
    >
    <div class="search-line__search-button">
      <svg
        v-svg
        symbol="search"
      />
    </div>
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
    "inputPlaceholder": "Enter query..."
  },
  "ru": {
    "inputPlaceholder": "Введите запрос..."
  }
}
</i18n>

<style>
@import "../styles/custom-properties.css";
@import "../styles/variables.css";

.search-line {
  @apply(--box-shadow-main);
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  padding: 12px;

  background: var(--color-white);
  border-radius: 2px;

  &__menu-button {
    width: 24px;
    height: 24px;
    margin-right: 12px;

    cursor: pointer;

    svg {
      width: 100%;
      height: 100%;
    }
  }

  &__input {
    @apply(--font-sans-serif-main);
    flex: 1;
    width: 100%;
    margin-right: 12px;
    padding: 3px 2px;

    color: var(--color-gray-main);

    font-size: 14px;

    background: transparent;
    border: none;
    outline: none;

    &::placeholder {
      @apply(--font-sans-serif-light);
      color: var(--color-gray-second);
    }
  }

  &__search-button {
    width: 24px;
    height: 24px;

    cursor: pointer;

    svg {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
