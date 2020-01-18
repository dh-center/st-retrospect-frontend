<template>
  <div class="photos">
    <div class="photos__title">
      {{ $t('photos') }}
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
/**
 * Component for photos block in aside bar
 */
export default class PhotosAside extends Vue {
}
</script>

<i18n>
{
  "ru": {
    "photos": "Фотографии"
  },
  "en": {
    "photos": "Photos"
  }
}
</i18n>

<style>
  @import "../styles/custom-properties.css";

  .photos {
    min-height: 150px;
    margin-bottom: 15px;

    &__title {
      @apply --font-serif-main;
      margin-bottom: 20px;

      color: #2d2d2d;
      font-size: 20px;
    }
  }
</style>
