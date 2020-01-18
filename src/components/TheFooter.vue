<template>
  <footer class="footer">
    <div class="footer__buttons">
      <button>О проекте</button>
      <button>Как пользоваться картой</button>
    </div>
    <a
      href="https://www.ifmo.ru/"
      class="footer__itmo-logo"
    >
      <svg
        v-svg
        symbol="itmo-logo"
      />
    </a>
  </footer>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component
/**
 * Footer for Map Aside
 */
export default class TheFooter extends Vue {

}
</script>

<style>
  @import '../styles/custom-properties.css';

  .footer {
    display: flex;
    align-items: center;
    padding: 5px 30px;

    background-color: #fff;
    border-top: 1px solid rgba(0, 0, 0, .2);

    button {
      @apply --font-sans-serif-light;
      display: block;

      color: #7c7c7c;
      font-size: 12px;
      line-height: 22px;

      background: none;
      border: none;
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
