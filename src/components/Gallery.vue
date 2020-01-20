<template>
  <div class="photos">
    <div class="photos__title">
      {{ $t('photos') }}
    </div>
    <LightGallery
      :images="images"
      :index="currentImageIndex"
      @close="currentImageIndex = null"
    />
    <div
      id="photo-gallery"
      class="photos__list"
    >
      <div
        v-for="(thumb, thumbIndex) in images"
        :key="thumbIndex"
        class="photos__item"
        :style="{'background-image': `url(${thumb})`}"
        @click="currentImageIndex = thumbIndex"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { LightGallery } from 'vue-light-gallery';

@Component({
  components: {
    LightGallery
  }
})
/**
 * Component for photos block in aside bar
 */
export default class Gallery extends Vue {
  images = [
    require('../assets/images/person-125-main.jpeg'),
    require('../assets/images/person-125-main.jpeg'),
    require('../assets/images/person-125-main.jpeg'),
    require('../assets/images/person-125-main.jpeg'),
    require('../assets/images/person-125-main.jpeg'),
    require('../assets/images/person-125-main.jpeg'),
    require('../assets/images/person-125-main.jpeg'),
    require('../assets/images/person-125-main.jpeg'),
    require('../assets/images/person-125-main.jpeg'),
    require('../assets/images/person-125-main.jpeg'),
    require('../assets/images/person-125-main.jpeg'),
    require('../assets/images/person-125-main.jpeg'),
    require('../assets/images/person-125-main.jpeg'),
    require('../assets/images/person-125-main.jpeg')
  ];

  currentImageIndex: number | null = null;
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

    &__list {
      display: grid;
      grid-row-gap: 15px;
      grid-template-columns: 115px 115px 115px;
      justify-content: space-between;
    }

    &__item {
      width: 115px;
      height: 100px;

      background-position: center;
      background-size: cover;
    }
  }
</style>
