<template>
  <div
    class="custom-select"
    @blur="isOpen = false"
  >
    <div
      class="custom-select__wrapper"
      :class="{'custom-select__wrapper--opened': isOpen}"
    >
      <div
        class="custom-select__input"
        @click="isOpen = !isOpen"
      >
        <div class="custom-select__input-text">
          {{ selected.length !== 0 ? selected.join(', ') : $t('placeholder') }}
        </div>
        <svg
          v-svg
          symbol="arrow-left"
          class="arrow"
          :class="{
            'arrow--top': isOpen,
            'arrow--bottom': !isOpen
          }"
        />
      </div>
      <div
        v-if="isOpen"
        class="custom-select__items"
      >
        <div
          v-for="(option, index) of options"
          :key="index"
          class="custom-select__item"
          @click="onItemClick(option)"
        >
          <svg
            v-if="selected.includes(option)"
            v-svg
            symbol="checkbox-checked"
            class="custom-select__item-checkbox"
          />
          <svg
            v-else
            v-svg
            symbol="checkbox"
            class="custom-select__item-checkbox"
          />
          <div class="custom-select__item-text">
            {{ option }}
          </div>
        </div>
        <div
          class="custom-select__item"
          @click="selected = []"
        >
          <span class="custom-select__remove-button">
            <svg
              v-svg
              symbol="cross"
            />
            {{ $t('reset') }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<i18n>
{
  "en": {
    "reset": "Reset",
    "placeholder": "All categories"
  },
  "ru": {
    "reset": "Сброс",
    "placeholder": "Все категории"
  }
}
</i18n>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
// eslint-disable-next-line no-unused-vars
import { PropType } from 'vue';

@Component
/**
 * Custom select with multiple choice
 */
export default class CustomSelect extends Vue {
  /**
   * Array of selected values
   */
  private selected: string[] = [];

  @Prop({
    type: Array as PropType<string[]>,
    required: true
  })
  /**
   * Array of available options
   */
  private options!: string[];

  /**
   * Is custom select open
   * @private
   */
  private isOpen: boolean = false;

  /**
   * Handler for click on item in dropdown
   * @param value - value of clicked item
   * @private
   */
  private onItemClick(value: string): void {
    if (this.selected.includes(value)) {
      const index = this.selected.indexOf(value);

      this.selected.splice(index, 1);
    } else {
      this.selected.push(value);
    }
  }
}
</script>

<style>
@import "../styles/variables.css";
@import "../styles/custom-properties.css";

.custom-select {
  @apply(--font-sans-serif-light);

  position: relative;

  flex: 1;

  /** It needs for displaying dropdown over content */
  height: 38.4px;
  margin-right: 16px;

  color: var(--color-gray-main);
  font-size: 14px;

  user-select: none;

  &__wrapper {
    position: absolute;

    width: 100%;

    background: var(--color-white);
    border: .5px solid #F2F2F2;
    border-radius: 2px;

    &--opened {
      @apply(--box-shadow-medium);
    }
  }

  &__input {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 10px 12px;

    cursor: pointer;

    .arrow {
      width: 6px;
      height: 12px;
      margin-right: 6px;

      transition: .3s;

      &--top {
        transform: rotate(90deg);
      }

      &--bottom {
        transform: rotate(270deg);
      }
    }
  }

  &__input-text {
    width: 100%;
    margin-right: 12px;
    overflow-x: hidden;

    white-space: nowrap;
    text-overflow: ellipsis;
  }

  &__items {
    z-index: 9999;
  }

  &__item {
    display: flex;
    align-items: center;
    padding: 10px 12px;

    border-bottom: 1px solid #F2F2F2;
    cursor: pointer;

    &:first-child {
      border-top: 1px solid #F2F2F2;
    }

    &:last-child {
      border-bottom: none;
    }

    &-checkbox {
      flex-shrink: 0;
      width: 16px;
      height: 16px;
      margin-right: 8px;
    }
  }

  &__item-text {
    width: 100%;
    overflow-x: hidden;

    white-space: nowrap;
    text-overflow: ellipsis;
  }

  &__remove-button {
    display: flex;
    align-items: center;
    padding-bottom: 2px;

    color: var(--color-gray-second);

    border-bottom: 1px solid var(--color-gray-second);

    svg {
      width: 16px;
      height: 16px;
      margin-right: 2px;

      /** Fix empty space on the left */
      margin-left: -3px;
    }
  }
}
</style>
