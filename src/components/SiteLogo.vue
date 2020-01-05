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
  @import '../styles/custom-properties.css';

  .site-logo {
    @apply --font-serif-main;
    color: #ffffff;
    font-size: 28px;
    text-decoration: none;
  }
</style>
