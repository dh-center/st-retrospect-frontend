<template>
  <div class="language-select">
    <span
      class="language-select__link"
      :class="{'language-select__link--active': (this.$store.state.app.interfaceLanguage === 'en')}"
      @click="changeInterfaceLanguage('en')"
    >EN</span>
    <span
      class="language-select__link"
      :class="{'language-select__link--active': (this.$store.state.app.interfaceLanguage === 'ru')}"
      @click="changeInterfaceLanguage('ru')"
    >RU</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { CHANGE_INTERFACE_LANG } from '@/store/modules/app/actionTypes';

@Component
/**
 * Component for language selecting
 */
export default class LanguageSelect extends Vue {
  /**
   * Change interface language and save it to storage
   * @param {String} lang - new interface language
   */
  private changeInterfaceLanguage(lang: string): void {
    this.$store.dispatch(CHANGE_INTERFACE_LANG, lang);
    this.$i18n.locale = lang;
    window.location.reload();
  }
}
</script>

<style>
@import '../styles/variables.css';
@import "../styles/custom-properties.css";

.language-select {
  display: flex;
  flex-direction: row;

  color: var(--color-white);
  font-size: 12px;
  text-transform: uppercase;

  &__link {
    @apply(--font-sans-serif-light);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;

    color: var(--color-gray-second);

    cursor: pointer;

    &:hover {
      @apply(--font-sans-serif-main);
      color: var(--color-gray-main);

      outline: .5px solid var(--color-gray-main);
      outline-offset: -1px;
    }

    &--active, &--active:hover {
      @apply(--font-sans-serif-main);
      color: var(--color-white);

      background: var(--color-gray-main);
      outline: none;
      cursor: default;
    }
  }
}
</style>
