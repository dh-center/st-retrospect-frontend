<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import i18n from '@/i18n';

@Component({
  created() {
    if (this.$store.state.app.interfaceLanguage && this.$store.state.app.interfaceLanguage !== i18n.locale) {
      i18n.locale = this.$store.state.app.interfaceLanguage;
    }
  }
})
/**
 * Class of application view
 */
export default class App extends Vue {

}
</script>

<style src="./styles/base.css">
</style>

<style>
#app {
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;

  font-family: 'Roboto', sans-serif;
}
</style>
