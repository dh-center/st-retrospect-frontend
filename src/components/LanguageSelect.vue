<template>
  <div class="language-select">
    <span
      class="language-select__link"
      :class="{'language-select__link--active': (this.$store.state.app.interfaceLanguage === 'ru')}"
      @click="changeInterfaceLanguage('ru')"
    >RU</span>
    <span
      class="language-select__link"
      :class="{'language-select__link--active': (this.$store.state.app.interfaceLanguage === 'en')}"
      @click="changeInterfaceLanguage('en')"
    >EN</span>
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
