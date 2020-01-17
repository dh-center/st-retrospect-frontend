<template>
  <div class="location-card">
    <img
      class="location-card__image"
      :src="location.mainPhotoLink"
    >
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
            1834-01-01
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
      <div class="photos">
        <div class="photos__title">
          {{ $t('photos') }}
        </div>
      </div>
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

@Component
/**
 * Component for location card
 */
export default class LocationCard extends Vue {
  @Prop({ type: Object, required: true })
  /**
   * Location to display
   */
  private location!: Location;
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
    "photos": "Фотографии",
    "source-link": "Ссылка на источник"
  },
  "en": {
    "persons-title": [
      "Were here",
      "persons"
    ],
    "build-time": "Construction",
    "architect": "Architect",
    "photos": "Photos",
    "source-link": "Source link"
  }
}
</i18n>

<style>
  @import '../styles/custom-properties.css';

  .location-card {
    width: 100%;

    &__image {
      width: 100%;
      height: auto;
      margin-bottom: 20px;
    }

    &__main {
      padding: 0 30px;

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

          font-size: 18px;
          line-height: inherit;
          letter-spacing: normal;
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
    }

    &__title {
      @apply --font-serif-main;
      margin-bottom: 10px;

      color: #2d2d2d;
      font-weight: 400;
      font-size: 24px;
      line-height: 28px;
    }

    &__address {
      @apply --font-sans-serif-light;

      font-size: 14px;
    }

    &__wrap--bordered {
      @apply --clearfix;
      margin-bottom: 15px;
      padding-bottom: 15px;

      border-bottom: 1px solid rgba(0, 0, 0, .2);
    }

    .info-block {
      float: left;
      margin-right: 20px;
      padding-right: 20px;

      border-right: 1px solid rgba(0, 0, 0, .2);

      &:last-child {
        border-right: none;
      }

      &__title {
        margin-bottom: 8px;

        font-size: 8px;
        line-height: 9px;
        letter-spacing: .2em;
        text-transform: uppercase;
      }

      &__content {
        @apply --font-sans-serif-light;
        font-size: 14px;
      }
    }

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

    &__links {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      margin-bottom: 20px;

      a {
        @apply --font-sans-serif-light;
        font-size: 10px;
        letter-spacing: .02em;
        text-transform: uppercase;
      }
    }
  }
</style>
