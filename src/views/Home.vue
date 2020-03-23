<template>
  <div class="home">
    <div class="home__top">
      <SiteLogo
        class="site-logo--z-index"
      />
      <button
        class="home__about-link"
        @click="openAboutProjectPopup"
      >
        {{ $t('about-project') }}
      </button>
    </div>
    <main class="home__main">
      <h1 class="home__title">
        {{ $t('title') }}
      </h1>
      <form
        class="home__search-container"
        @submit.prevent="search"
      >
        <input
          v-model="searchString"
          type="text"
          class="search__input"
          :placeholder="$t('search-placeholder')"
        >
        <button
          type="submit"
          class="button button--search search__button"
        >
          {{ $t('want-to-know') }}
          <svg
            v-svg
            symbol="arrow-right"
          />
        </button>
      </form>
      <button
        class="home__how-to-link"
        @click="openHowToUseModal"
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
import AboutProjectPopup from '@/components/modals/AboutProject.vue';
import { SEARCH_FOR_RELATIONS, UPDATE_LAST_SEARCH_QUERY } from '@/store/modules/app/actionTypes';

@Component({
  components: {
    SiteLogo,
    LanguageSelect
  }
})
/**
 * View for home page
 */
export default class HomeView extends Vue {
  /**
   * Search string for finding locations
   */
  private searchString: string = this.$store.state.app.lastSearchQuery || '';

  /**
   * Search data with user input
   */
  private search() {
    this.$store.dispatch(UPDATE_LAST_SEARCH_QUERY, this.searchString);
    this.$store.dispatch(SEARCH_FOR_RELATIONS, this.searchString);

    this.$router.push({
      name: 'map',
      params: {
        searchString: this.searchString
      }
    });
  }

  /**
   * Opens "How to Use" popup
   */
  private openHowToUseModal() {
    this.$modal.show(HowToUsePopup, {}, {
      height: 400
    });
  }

  /**
   * Opens "About project" popup
   */
  private openAboutProjectPopup() {
    this.$modal.show(AboutProjectPopup, {}, {
      height: 400
    });
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
    @keyframes animate-clouds-top {
      0% {
        background-position: 100vw 0;
      }
    }

    @keyframes animate-clouds-bottom {
      0% {
        background-position: 100vw 100%;
      }
    }

    position: relative;

    width: 100%;
    height: 100vh;
    padding: 50px 60px;

    background-image: url("../assets/images/background.jpg");
    background-repeat: no-repeat;
    background-size: cover;

    &::before, &::after {
      position: absolute;
      left: 0;

      width: 100%;
      height: 100%;

      background-repeat: repeat-x;
      background-size: 100% auto;

      content: '';
      will-change: background-position;
    }

    &::before {
      top: 0;

      background-image: url('../assets/images/clouds/cloud-top.png');
      background-position: 0 0;

      animation: animate-clouds-top 30s linear infinite;
    }

    &::after {
      background-image: url('../assets/images/clouds/cloud-bottom.png');
      background-position: 0 100%;

      animation: animate-clouds-bottom 30s linear infinite;
    }

    &__top {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .site-logo--z-index {
        z-index: 1;
      }
    }

    &__main {
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 1;

      padding: 0 30px;

      text-align: center;

      transform: translate(-50%, -50%);
    }

    &__about-link {
      z-index: 1;

      color: #ffffff;
      font-size: 16px;

      background: none;
      border: none;
      cursor: pointer;
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

      background: none;
      border:none;

      border-bottom: 1px solid #f6c23d;
      cursor: pointer;
    }
  }
</style>
