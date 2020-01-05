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
