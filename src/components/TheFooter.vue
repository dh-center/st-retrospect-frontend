<template>
  <footer class="footer">
    <div class="footer__buttons">
      <button @click="openAboutProjectPopup">
        {{ $t('about') }}
      </button>
      <button @click="openHowToUseModal">
        {{ $t('how-to-use') }}
      </button>
    </div>
    <a
      href="https://www.ifmo.ru/"
      target="_blank"
      class="footer__itmo-logo"
    >
      <svg
        v-svg
        symbol="itmo-logo"
      />
    </a>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HowToUsePopup from '@/components/modals/HowToUse.vue';
import AboutProjectPopup from '@/components/modals/AboutProject.vue';

@Component
/**
 * Footer for Map Aside
 */
export default class TheFooter extends Vue {
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
    "about": "About project",
    "how-to-use": "How to use map"
  },
  "ru": {
    "about": "О проекте",
    "how-to-use": "Как пользоваться картой"
  }
}
</i18n>

<style>
  @import '../styles/custom-properties.css';

  .footer {
    display: flex;
    align-items: center;
    padding: 10px 30px;

    background-color: #fff;
    border-top: 1px solid rgba(0, 0, 0, .2);

    button {
      @apply --font-sans-serif-light;
      display: block;

      color: #7c7c7c;
      font-size: 12px;

      background: none;
      border: none;
      outline: none;
      cursor: pointer;
    }

    &__itmo-logo {
      width: 141px;
      height: 25px;
      margin-left: auto;

      svg {
        width: 100%;
        height: 100%;

        filter: grayscale(1);

        &:hover {
          filter: none;
        }
      }
    }
  }
</style>
