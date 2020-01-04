<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
/**
 * Class of application view
 */
export default class App extends Vue {}
</script>

<style src="./styles/base.css"/>

<style>
#app {
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  font-family: 'Roboto', sans-serif;
}
</style>
