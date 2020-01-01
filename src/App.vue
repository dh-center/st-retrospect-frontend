<template>
  <div id="app">
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  }
})

/**
 * Class of application view
 */
export default class App extends Vue {}
</script>

<style src="./styles/base.css"/>
<style src="./styles/fonts.css"/>

<style>
#app {
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
}
</style>
