<template>
  <div class="language-select">
    <a
      href="#"
      class="language-select__link language-select__link--active"
    >RU</a>
    <a
      href="#"
      class="language-select__link"
    >EN</a>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
/**
 * Component for language selecting
 */
export default class LanguageSelect extends Vue {}
</script>

<style>
  .language-select {
    font-size: 10px;
    text-transform: uppercase;
    color: #fff;
    letter-spacing: 0.2em;
    text-shadow: 0 0 4px rgba(0, 0, 0, .5);

    &__link {
      text-decoration: none;
      margin-left: 5px;

      &--active {
        color: #f6c23d;
      }
    }
  }
</style>
