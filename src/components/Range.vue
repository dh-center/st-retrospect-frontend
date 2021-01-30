<template>
  <div class="range">
    <input
      v-model="valueA"
      :min="min"
      :max="max"
      type="range"
      class="range__input"
    >
    <input
      v-model="valueB"
      :min="min"
      :max="max"
      type="range"
      class="range__input"
    >
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
// eslint-disable-next-line no-unused-vars
import { PropType } from 'vue';

/**
 * Type of range values
 */
type RangeValues = {
  /**
   * Left value of range
   */
  valueA: string;

  /**
   * Right value of range
   */
  valueB: string;
}

@Component
/**
 * Custom range with two thumbs
 */
export default class Range extends Vue {
  @Prop({
    type: String,
    required: true
  })
  /**
   * Minimum value
   */
  private min!: string;

  @Prop({
    type: String,
    required: true
  })
  /**
   * Maximum value
   */
  private max!: string;

  @Prop({
    type: Function as PropType<(values: RangeValues) => void>,
    required: true
  })
  /**
   * Handle function for changed values
   */
  private onChange!: (values: RangeValues) => void;

  @Prop({
    type: Object as PropType<RangeValues>,
    required: true
  })
  private values!: RangeValues;

  /**
   * Left value
   */
  private valueA: string = this.values.valueA;

  /**
   * Right value
   */
  private valueB: string = this.values.valueB;

  /**
   * On left value change handler
   *
   * @param val - new value
   * @param oldVal - old value
   */
  @Watch('valueA')
  onValueAChange(val: string, oldVal: string) {
    if (val > this.valueB) {
      const temp = this.valueA;

      this.valueA = this.valueB;
      this.valueB = temp;
    }

    this.onChange({
      valueA: this.valueA,
      valueB: this.valueB
    });
  }

  /**
   * On right value change handler
   *
   * @param val - new value
   * @param oldVal - old value
   */
  @Watch('valueB')
  onValueBChange(val: string, oldVal: string) {
    if (val < this.valueA) {
      const temp = this.valueA;

      this.valueA = this.valueB;
      this.valueB = temp;
    }

    this.onChange({
      valueA: this.valueA,
      valueB: this.valueB
    });
  }
}
</script>

<style>
@import '../styles/variables.css';

.range {
  position: relative;

  height: 20px;

  &__input {
    /** Webkit styles */
    position: absolute;

    width: 100%;
    height: 2px;
    margin: 0;
    padding: 0;

    background: var(--color-gray-light);
    border-radius: 2px;
    outline: none;

    -webkit-appearance: none;

    pointer-events: none;
    -webkit-tap-highlight-color: var(--color-gray-light);

    &::-webkit-slider-thumb {
      position: relative;
      top: 10px;
      z-index: 10;

      width: 12px;
      height: 14px;

      background-image: url("../assets/sprite-icons/range-thumb.svg");
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      outline: none;
      cursor: pointer;

      -webkit-appearance: none;

      pointer-events: all;
    }

    /** Microsoft Edge styles */
    &::-ms-thumb {
      position: relative;
      top: 10px;
      z-index: 10;

      width: 12px;
      height: 14px;

      background-image: url("../assets/sprite-icons/range-thumb.svg");
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      outline: none;
      cursor: pointer;

      -ms-appearance: none;

      pointer-events: all;
    }

    /** Mozilla Firefox styles */
    &::-moz-range-track {
      position: relative;

      height: 2px;
      margin: 0;
      padding: 0;

      border: none;
      border-radius: 2px;
      outline: none;
    }

    &:last-child::-moz-range-track {
      background: transparent;

      -moz-appearance: none;
    }

    &::-moz-range-thumb {
      position: relative;
      z-index: 10;

      width: 12px;
      height: 14px;

      background-color: transparent;
      background-image: url("../assets/sprite-icons/range-thumb.svg");
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      border: none;
      outline: none;
      transform: translateY(10px);
      cursor: pointer;

      -moz-appearance: none;

      pointer-events: all;
    }
  }
}
</style>
