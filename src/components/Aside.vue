<template>
  <aside
    class="aside"
    :class="{'aside--opened': isOpen}"
  >
    <div class="aside__header">
      <SiteLogo />
      <LanguageSelect />
    </div>
    <div
      class="aside__open-button"
      @click="isOpen=!isOpen"
    >
      <svg
        v-svg
        symbol="arrow-left"
        class="arrow"
        :class="{
          'arrow--left': isOpen,
          'arrow--right': !isOpen
        }"
      />
    </div>
    My new aside
  </aside>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import SiteLogo from '@/components/SiteLogo.vue';
import LanguageSelect from '@/components/LanguageSelect.vue';

@Component({
  components: {
    SiteLogo,
    LanguageSelect
  }
})
/**
 * Aside bar
 */
export default class Aside extends Vue {
  /**
   * Is aside open or closed
   */
  private isOpen: boolean = true;
}
</script>

<style>
@import '../styles/variables.css';

:root {
  --aside__open-button-width: 48px;
}

.aside {
  @apply --box-shadow-main;
  position: absolute;
  top: 0;
  left: 0;

  width: 372px;
  height: 100vh;
  padding: 20px 16px;

  background: var(--color-bg-main);
  transform: translateX(-100%);

  transition: .5s;

  &--opened {
    transform: translateX(0%);
  }

  &__header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 3px;

    border-bottom: 2px solid var(--color-main);
  }

  &__open-button {
    position: absolute;
    top: 16px;
    right: calc(-1 * var(--aside__open-button-width));

    display: flex;
    align-items: center;
    justify-content: center;

    width: var(--aside__open-button-width);
    height: 48px;

    background: var(--color-bg-main);
    border-radius: 0 2px 2px 0;
    cursor: pointer;
    opacity: .8;

    .arrow {
      width: 8px;
      height: 14px;

      transition: .5s;

      &--left {
        transform: rotate(0deg);
      }

      &--right {
        transform: rotate(180deg);
      }
    }
  }
}
</style>
