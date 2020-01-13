<template>
  <div class="home">
    <div class="home__top">
      <SiteLogo />
      <a
        href="#"
        class="home__about-link"
      >{{ $t('about-project') }}</a>
    </div>
    <main class="home__main">
      <h1 class="home__title">
        {{ $t('title') }}
      </h1>
      <div class="home__search-container">
        <input
          type="text"
          class="search__input"
          :placeholder="$t('search-placeholder')"
        >
        <router-link
          class="button button--search search__button"
          :to="{ name: 'map' }"
        >
          {{ $t('want-to-know') }}
          <svg
            v-svg
            symbol="arrow-right"
          />
        </router-link>
      </div>
      <button
        class="home__how-to-link"
        @click="openHowToUseModal()"
      >
        {{ $t('how-to') }}
      </button>
      <LanguageSelect />
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SiteLogo from '@/components/SiteLogo.vue';
import LanguageSelect from '@/components/LanguageSelect.vue';
import HowToUsePopup from '@/components/modals/HowToUse.vue';

@Component({
  components: {
    SiteLogo,
    LanguageSelect,
    HowToUsePopup
  }
})
/**
 * View for home page
 */
export default class HomeView extends Vue {
  /**
   * Opens "How to Use" popup
   */
  private openHowToUseModal() {
    console.dir(HowToUsePopup);
    this.$modal.show(HowToUsePopup);

  /*
   *   this.$modal.show({
   *     template: `
   *   <div>
   *     <h1>This is created inline</h1>
   *     <p>{{ text }}</p>
   *   </div>
   * `,
   *     props: [ 'text' ]
   *   }, {
   *     text: 'This text is passed as a property'
   *   }, {
   *     height: 'auto'
   *   }, {
   *     'before-close': () => {
   *       console.log('this will be called before the modal closes');
   *     }
   *   });
   */
  }
}
</script>

<i18n>
{
  "en": {
    "about-project": "About Project",
    "how-to": "How to use map?",
    "want-to-know": "I want to know",
    "title": "Get to know St. Petersburg through the eyes of great people",
    "search-placeholder": "Where Pushkin walked..."
  },
  "ru": {
    "about-project": "О проекте",
    "how-to": "Как пользоваться картой?",
    "want-to-know": "Хочу знать",
    "title": "Познай Санкт-Петербург глазами великих людей",
    "search-placeholder": "Где гулял Пушкин..."
  }
}
</i18n>

<style>
  @import '../styles/custom-properties.css';

  .home {
    position: relative;

    width: 100%;
    height: 100vh;
    padding: 50px 60px;

    background-image: url("../assets/images/background.jpg");
    background-repeat: no-repeat;
    background-size: cover;

    &__top {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &__main {
      position: absolute;
      top: 50%;
      left: 50%;

      padding: 0 30px;

      text-align: center;

      transform: translate(-50%, -50%);
    }

    &__about-link {
      color: #ffffff;
      font-size: 16px;
      text-decoration: none;
    }

    &__title {
      @apply --font-serif-main;

      width: 100%;
      margin: 0 0 80px;

      color: #ffffff;
      font-weight: 400;
      font-size: 64px;
      line-height: 72px;
      text-align: center;
    }

    &__search-container {
      display: flex;
      margin-bottom: 50px;

      .search__input {
        width: 720px;
        height: 70px;
        padding: 0 30px;

        color: #000000;
        font-size: 18px;

        background-color: #ffffff;
        border: none;
      }

      .search__button {
        width: 210px;
        height: 70px;

        svg {
          width: 30px;
          height: 15px;
        }
      }
    }

    &__how-to-link {
      display: inline-block;
      margin-bottom: 40px;

      color: #ffffff;
      font-size: 16px;
      text-decoration: none;
      text-shadow: 0 0 4px rgba(0, 0, 0, .5);

      border-bottom: 1px solid #f6c23d;
    }
  }
</style>
