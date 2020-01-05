<template>
  <div class="language-select">
    <span
      class="language-select__link language-select__link--active"
      @click="$root.$i18n.locale = 'ru'"
    >RU</span>
    <span
      class="language-select__link"
      @click="$root.$i18n.locale = 'en'"
    >EN</span>
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
    color: #fff;
    font-size: 10px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    text-shadow: 0 0 4px rgba(0, 0, 0, .5);

    &__link {
      margin-left: 5px;

      cursor: pointer;

      &--active {
        color: #f6c23d;
      }
    }
  }
</style>
