<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { CHANGE_INTERFACE_LANG } from '@/store/modules/app/actionTypes';

@Component
/**
 * Class of application view
 */
export default class App extends Vue {
  /**
   * Vue created hook
   * Get interface language from store and set to i18n module
   * If store is empty, add interface language to it from i18n module
   */
  created() {
    if (this.$store.state.app.interfaceLanguage && this.$store.state.app.interfaceLanguage !== this.$i18n.locale) {
      this.$i18n.locale = this.$store.state.app.interfaceLanguage;
    } else if (!this.$store.state.app.interfaceLanguage) {
      this.$store.dispatch(CHANGE_INTERFACE_LANG, this.$i18n.locale);
    }
  }
}
</script>

<style src="./styles/base.css">
</style>

<style>
@import './styles/custom-properties.css';

#app {
  @apply --font-sans-serif-main;

  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
}
</style>
