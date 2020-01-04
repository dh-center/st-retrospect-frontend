<template>
  <router-link
    to="/"
    class="site-logo"
  >
    St.Retrospect
  </router-link>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
/**
 * Component of site logo
 */
export default class SiteLogo extends Vue {}
</script>

<style>
  .site-logo {
    font-family: 'Oranienbaum', serif;
    font-size: 28px;
    color: #ffffff;
    text-decoration: none;
  }
</style>
