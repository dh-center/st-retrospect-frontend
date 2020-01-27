<template>
  <div
    v-if="location"
    class="location-card"
  >
    <div
      class="location-card__image"
      :style="mainImageStyle"
    />
    <div class="location-card__main">
      <div class="location-card__wrap--bordered">
        <div class="persons">
          <div class="persons__title-block">
            <div class="persons__title-text persons__title-text--serif">
              {{ $t('persons-title[0]') }}
            </div>
            <div class="persons__title-text">
              {{ $t('persons-title[1]') }}
            </div>
          </div>
          <div class="persons__list">
            <div class="persons__item">
              <img
                class="persons__photo"
                src="../assets/images/default-person.jpeg"
              >
            </div>
          </div>
        </div>
        <h2 class="location-card__title">
          {{ location.name.ru }}
        </h2>
        <div class="location-card__address">
          Биржевой переулок 1
        </div>
      </div>
      <div class="location-card__wrap--bordered">
        <div class="info-block">
          <div class="info-block__title">
            {{ $t('build-time') }}
          </div>
          <div class="info-block__content">
            {{ location.constructionDate || '??' }}
          </div>
        </div>
        <div class="info-block">
          <div class="info-block__title">
            {{ $t('architect') }}
          </div>
          <div class="info-block__content">
            Боссе Г. А. Маас И. П.
          </div>
        </div>
      </div>
      <Gallery />
      <div class="location-card__links">
        <a href="wikipedia.org">
          {{ $t('source-link') }}
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
// eslint-disable-next-line no-unused-vars
import Location from '@/types/location';
import Gallery from '@/components/Gallery.vue';
import * as searchApi from '@/api/search';
// eslint-disable-next-line no-unused-vars
import { Route } from 'vue-router';

@Component({
  components: {
    Gallery
  }
})
/**
 * Component for location card
 */
export default class LocationCard extends Vue {
  /**
   * Location to display
   */
  private location: Location | null = null;

  @Prop({ type: String, required: true })
  /**
   * Location id to display
   */
  private locationId!: string;

  /**
   * Router hook for fetch data from API
   * @param to - new location
   * @param from - old location
   * @param next - callback
   */
  beforeRouteEnter(to: Route, from: Route, next: Function): void {
    searchApi.findLocation(to.params.id).then(location => {
      next((vm: LocationCard) => (vm.location = location));
    });
  }

  /**
   * Returns CSS code for displaying location image
   */
  get mainImageStyle() {
    if (this.location) {
      return { 'background-image': `url('${this.location.mainPhotoLink}')` };
    }

    return {};
  }
}
</script>

<i18n>
{
  "ru": {
    "persons-title": [
      "Здесь были",
      "личности"
    ],
    "build-time": "Строительство",
    "architect": "Архитектор",
    "source-link": "Ссылка на источник"
  },
  "en": {
    "persons-title": [
      "Were here",
      "persons"
    ],
    "build-time": "Construction",
    "architect": "Architect",
    "source-link": "Source link"
  }
}
</i18n>

<style src="../styles/cards.css"></style>

<style>
  @import '../styles/custom-properties.css';

  .location-card {
    .persons {
      @apply --clearfix;

      &__title-block {
       float: left;
       width: 95px;
       margin-right: 20px;
      }

      &__title-text {
       color: #2d2d2d;
       font-size: 10px;
       line-height: 9px;
       letter-spacing: .2em;
       text-transform: uppercase;
      }

      &__title-text--serif {
        @apply --font-serif-main;

        margin-bottom: 5px;

        color: #2d2d2d;

        font-size: 20px;
        line-height: inherit;
        letter-spacing: normal;
        text-transform: none;
      }

      &__item {
        margin-right: 8px;
      }

      &__photo {
        width: 45px;
        height: 45px;

        border-radius: 50%;
      }
    }

    &__address {
      @apply --font-sans-serif-light;

      font-size: 14px;
    }
  }
</style>
