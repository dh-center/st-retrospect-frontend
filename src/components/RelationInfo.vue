<template>
  <div class="relation-info">
    <div
      class="relation-info__image"
      :style="{ 'background-image': `url('${relation.location.mainPhotoLink}')` }"
    />
    <div class="relation-info__main">
      <h3 class="relation-info__name">
        {{ relation.location.name }}
      </h3>
      <div class="relation-info__wrapper">
        <div class="relation-info__building-type">
          {{ relation.location.locationTypes[0].name }}
        </div>
        <div class="relation-info__address">
          {{ locationAddress }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
// eslint-disable-next-line no-unused-vars
import Relation from '@/types/relation';

@Component
/**
 * Displays short relation info (image, name, address, building type)
 * Used in Aside bar
 */
export default class RelationInfo extends Vue {
  @Prop({ type: Object, required: true })
  /**
   * Relation to display
   */
  private relation!: Relation;

  /**
   * Get location address in one string
   */
  get locationAddress(): string {
    const locationAddresses = this.relation.location.addresses;

    if (locationAddresses && locationAddresses.length) {
      return `${locationAddresses[0].street} ` +
        `${locationAddresses[0].build} ` +
        `${locationAddresses[0].homeNumber} ` +
        `${locationAddresses[0].housing}`.replace(/\s{2,}/g, ' ');
    }
    return '';
  }
}
</script>

<style>
  @import '../styles/custom-properties.css';

  .relation-info {
    display: flex;

    &__main {
      position: relative;

      width: 100%;

      padding: 15px 10px 0;
      overflow: hidden;

      &::before {
        position: absolute;
        right: 15px;
        bottom: 0;
        left: 15px;

        height: 1px;

        background-color: rgba(0, 0, 0, .2);

        transition-timing-function: ease;

        transition-duration: .5s;
        transition-property: right, left;

        content: '';
      }
    }

    &__name {
      @apply --font-serif-main;
      width: 100%;
      margin: 0 0 5px;
      overflow: hidden;

      color: #2d2d2d;
      font-weight: normal;
      font-size: 18px;
      line-height: 21px;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    &__image {
      min-width: 30%;

      background-position: center;
      background-size: cover;
    }

    &__wrapper {
      display: flex;
    }

    &__building-type {
      color: #7c7c7c;
      font-weight: 300;
      font-size: 12px;
      line-height: 20px;

      &::after {
        display: inline-block;
        width: 2px;
        height: 2px;
        margin: 0 9px;

        vertical-align: middle;

        background-color: #c4c4c4;

        content: '';
      }
    }

    &__address {
      @apply --font-sans-serif-light;
      overflow: hidden;

      color: #000;
      font-size: 12px;
      line-height: 20px;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    &:hover {
      background-color: #f0f0f0;

      .relation-info__main::before {
        right: 0;
        left: 0;
      }
    }
  }
</style>
