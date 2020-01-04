<template>
  <div class="search-line">
    <label
      class="search-line__label"
      :for="$id('input')"
    >Поиск</label>
    <input
      :id="$id('input')"
      class="search-line__input"
      type="text"
    >
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component
/**
 * Search line for searching persons, location, etc
 * Used in Aside bar of the Map view
 */
export default class SearchLine extends Vue {

}
</script>

<style>
.search-line {
  position: relative;

  &__label {
    position: absolute;
    font-size: 8px;
    line-height: 9px;
    letter-spacing: .2em;
    text-transform: uppercase;
    color: #7c7c7c;
  }

  &__input {
    width: 100%;
    font-size: 16px;
    line-height: 19px;
    height: 50px;
    padding-right: 20px;
    color: #fff;
    border: none;
    border-bottom: 1px solid #fff;
    outline: none;
    background-color: transparent;
  }
}
</style>
