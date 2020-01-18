<template>
  <div class="person-card">
    <div
      class="person-card__image"
      :style="{'background-image': `url(${require('../assets/images/person-125-main.jpeg')}`}"
    />
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
      <PhotosAside />
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
import PhotosAside from '@/components/PhotosAside.vue';

@Component({
  components: {
    PhotosAside
  }
})
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
    "source-link": "Ссылка на источник"
  },
  "en": {
    "years": "Years of life",
    "profession": "The activity",
    "source-link": "Source link"
  }
}
</i18n>

<style src="../styles/cards.css"></style>

<style>
  @import "../styles/custom-properties.css";

  .person-card {
    &__text {
      @apply --font-sans-serif-light;
      margin-bottom: 30px;

      font-size: 14px;
      line-height: 170%;
    }
  }
</style>
