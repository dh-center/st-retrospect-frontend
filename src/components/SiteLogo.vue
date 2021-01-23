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
@import "../styles/variables.css";

.site-logo {
  @apply --font-serif-main;
  color: var(--color-gray-main);
  font-size: 36px;
  text-decoration: none;
}
</style>
