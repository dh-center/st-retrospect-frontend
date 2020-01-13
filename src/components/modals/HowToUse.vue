<template>
  <div class="how-to-use-popup">
    <h2 class="how-to-use-popup__title">
      {{ $t('title') }}
    </h2>
    <p class="how-to-use-popup__text">
      {{ $t('text') }}
    </p>
    <ul class="how-to-use-popup__list">
      <li>
        <p>
          {{ $t('list[0]') }}
        </p>
        <img
          src="../../assets/images/how-to-use/image1.jpg"
        >
      </li>
      <li>
        <p>
          {{ $t('list[1]') }}
        </p>
        <img
          src="../../assets/images/how-to-use/image2.jpg"
        >
      </li>
      <li>
        <p>
          {{ $t('list[2]') }}
        </p>
        <img
          src="../../assets/images/how-to-use/image3.jpg"
        >
      </li>
      <li>
        <p>
          {{ $t('list[3]') }}
        </p>
        <img
          src="../../assets/images/how-to-use/image4.jpg"
        >
      </li>
    </ul>
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';

@Component
/**
 * Popup with explaining of how to use this applications
 */
export default class HowToUsePopup extends Vue {
}
</script>

<i18n>
{
  "en": {
    "title": "How to use a map",
    "text": "Interaction with the card occurs in several ways:",
    "list": [
      "You can enter a query in the search field (for example; lived N.V. Gogol). Search can be carried out: a) by personality (for example, A. S. Pushkin, F. M. Dostoevsky, etc.); b) by location (for example, theaters, palaces, museums, etc.); c) on the interaction of personality and location (for example, where A.S. Pushkin studied);",
      "You can use the time scale, which allows you to observe: a) changes in the map in different time periods; b) the activities of great people in the years of their lives;",
      "on the main page of the site provides a quick transition to cards A.S. Pushkin, N.V. Gogol and M. Yu. Lermontov. To go to the card, click on the portrait of the person;",
      "for more accurate search results, use the filters that are located to the right of the map logo. They make it possible to refine the request by type of activity and type of location."
    ]
  },
  "ru": {
    "title": "Как пользоваться картой",
    "text": "Взаимодействие с картой проиходит несколькими способами:",
    "list": [
      "вы можете ввести запрос в поле поиска (например; жил Н. В. Гоголь). Поиск может осуществляться: а) по личности (например, А. С. Пушкин, Ф. М. Достоевский и др.); б) по локации (например, театры, дворцы, музеи и др.); в) по взаимодействию личности и локации (например, где учился А. С. Пушкин);",
      "вы можете воспользоваться шкалой времени, которая позволяет наблюдать за: а) изменениями карты в различные временные отрезки; б) за деятельностью великих людей в годы их жизни;",
      "на главной странице сайта предусмотрен быстрый переход в карточки А. С. Пушкина, Н. В. Гоголя и М. Ю. Лермонтова. Для перехода в карточку кликните по портрету личности;",
      "для более точной поисковый выдачи воспользуйтесь фильтрами, которые располагаются справа от логотипа карты. Они дают возможность уточнения запроса по виду деятельность и виду локации."
    ]
  }
}
</i18n>

<style>
  @import "../../styles/custom-properties.css";

  .how-to-use-popup {
    @apply --font-sans-serif-light;
    @apply --custom-scroll;
    height: 100%;
    padding: 30px;
    overflow: auto;

    font-size: 14px;
    line-height: 24px;

    &__title {
      @apply --font-serif-main;
      margin: 0 0 20px;
      padding: 0;

      color: #2d2d2d;
      font-weight: 400;
      font-size: 24px;
    }

    &__list {
      margin-top: 50px;
    }

    ul, li {
      list-style-type: disc;
    }
  }
</style>
