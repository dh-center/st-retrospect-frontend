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
    color: #ffffff;
    font-size: 28px;
    font-family: 'Oranienbaum', serif;
    text-decoration: none;
  }
</style>
