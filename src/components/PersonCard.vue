<template>
  <div class="person-card">
    <div class="person-card__image-wrap">
      <img
        src="../assets/images/person-125-main.jpeg"
        class="person-card__image"
      >
    </div>
    <div class="person-card__main">
      <div class="person-card__wrap--bordered">
        <h2 class="person-card__title">
          Пётр Ильич Чайковский
        </h2>
        <div class="info-block__wrap">
          <div class="info-block">
            <div class="info-block__title">
              {{ $t('years') }}
            </div>
            <div class="info-block__content">
              1834-01-01
            </div>
          </div>
          <div class="info-block">
            <div class="info-block__title">
              {{ $t('profession') }}
            </div>
            <div class="info-block__content">
              Дирижёр, педагог
            </div>
          </div>
        </div>
      </div>
      <div class="person-card__text">
        Начал заниматься музыкой в раннем детстве. В 1942 году в возрасте шести лет он был эвакуирован из блокадного Ленинграда. С 1944 по 1953 годы Чернушенко учился в хоровом училище при Ленинградской государственной академической капелле .Вернувшись в Ленинград в 1962 году, организовал любительский Ленинградский камерный хор во Дворце культуры пищевой промышленности и руководил этим коллективом в течение 17 лет. Он вновь стал учиться в Ленинградской консерватории и в 1967 году закончил её уже как дирижёр оперно-симфонического оркестра.С 1971 по 1974 год — второй дирижёр Ленинградского государственного академического Малого театра оперы и балета.В эти же годы активно занимался педагогической деятельностью — в консерватории (профессор с 1987), Хоровом училище имени М. И. Глинки, Музыкальном училище им. М. П. Мусоргского. Работал дирижёром Симфонического оркестра Карельского радио и телевидения, выступал в качестве дирижёра симфонических и камерных концертов, ставил ряд спектаклей в Оперной студии при Ленинградской консерватории.
      </div>
      <div class="photos">
        <div class="photos__title">
          {{ $t('photos') }}
        </div>
      </div>
      <div class="person-card__links">
        <a href="wikipedia.org">
          {{ $t('source-link') }}
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
/**
 * Component for person card
 */
export default class PersonCard extends Vue {
}
</script>

<i18n>
{
  "ru": {
    "years": "Годы жизни",
    "profession": "Деятельность",
    "photos": "Фотографии",
    "source-link": "Ссылка на источник"
  },
  "en": {
    "years": "Years of life",
    "profession": "The activity",
    "photos": "Photos",
    "source-link": "Source link"
  }
}
</i18n>

<style>
  @import "../styles/custom-properties.css";

  .person-card {
    width: 100%;

    &__image {
      width: 100%;

      &-wrap {
        width: 100%;
        height: 215px;
        margin-bottom: 20px;
        overflow: hidden;
      }
    }

    &__main {
      padding: 0 30px;
    }

    &__wrap--bordered {
      @apply --clearfix;
      margin-bottom: 15px;
      padding-bottom: 15px;

      border-bottom: 1px solid rgba(0, 0, 0, .2);
    }

    &__title {
      @apply --font-serif-main;
      margin-bottom: 10px;

      color: #2d2d2d;
      font-weight: 400;
      font-size: 24px;
      line-height: 28px;
    }

    .info-block {
      float: left;
      margin-right: 20px;
      padding-right: 20px;

      border-right: 1px solid rgba(0, 0, 0, .2);

      &__wrap {
        @apply --clearfix;
      }

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

    &__text {
      @apply --font-sans-serif-light;
      margin-bottom: 30px;

      font-size: 14px;
      line-height: 170%;
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
