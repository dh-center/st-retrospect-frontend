<template>
  <div class="about-project-popup">
    <div class="about-project-popup__image" />
    <h2 class="about-project-popup__title">
      {{ $t('title') }}
    </h2>
    <p class="about-project-popup__text">
      {{ $t('text') }}
    </p>
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';

@Component
/**
 * Modal window with project description
 */
export default class AboutProject extends Vue {
}
</script>

<i18n>
{
  "en": {
    "title": "About the project",
    "text": "Project “St. Retrospect ”was implemented at the intersection of the philosophy of culture, cultural studies, history and information and communication technologies by creating an interactive online platform based on open-source software containing historical and cultural metadata of key toponyms of St. Petersburg."
  },
  "ru": {
    "title": "О проекте",
    "text": "Проект «St. Retrospect» реализован на стыке философии культуры, культурологии, истории и информационно-коммуникативных технологий путем создания интерактивной онлайн платформы на базе open-source программного обеспечения, содержащей историко-культурологические метаданные ключевых топонимов Санкт-Петербурга."
  }
}
</i18n>

<style>
@import "../../styles/custom-properties.css";

.about-project-popup {
  @apply --custom-scroll;
  height: 100%;
  overflow: auto;

  &__image {
    height: 247px;

    background-image: url("../../assets/images/about-popup.jpg");
    background-position: center center;
    background-size: cover;
  }

  &__title {
    @apply --font-serif-main;
    margin-top: 30px;
    margin-bottom: 20px;
    padding: 0 30px;

    color: #2d2d2d;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
  }

  &__text {
    @apply --font-sans-serif-light;
    padding: 0 30px 50px;

    color: #2d2d2d;
    font-weight: 300;
    font-size: 14px;
    line-height: 24px;
  }
}
</style>
