<template>
  <div class="location-info">
    <div
      class="location-info__image"
      :style="{ 'background-image': `url('${location.mainPhotoLink}')` }"
    />
    <div class="location-info__main">
      <h3 class="location-info__name">
        {{ location.name.ru }}
      </h3>
      <div class="location-info__wrapper">
        <div class="location-info__building-type">
          доходный дом
        </div>
        <div class="location-info__address">
          Биржевой переулок 1
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
// eslint-disable-next-line no-unused-vars
import Location from '@/types/location';

@Component
/**
 * Aside bar of Map View
 */
export default class LocationInfo extends Vue {
  @Prop({ type: Object, required: true })
  private location!: Location;
}
</script>

<style>
  .location-info {
    display: flex;
    overflow: hidden;

    &__main {
      position: relative;

      width: 100%;
      margin: 10px 10px 0;

      &::before {
        position: absolute;
        bottom: 0;
        left: 0;

        width: 100%;
        height: 1px;

        background-color: rgba(0, 0, 0, .2);

        transition: all ease .5s;

        content: '';
      }
    }

    &__name {
      width: 100%;
      margin: 0 0 5px;
      overflow: hidden;

      color: #2d2d2d;
      font-size: 18px;
      font-family: 'Oranienbaum', serif;
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
      font-family: 'Roboto', sans-serif;
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
      overflow: hidden;

      color: #000;
      font-weight: 300;
      font-size: 12px;
      font-family: 'Roboto', sans-serif;
      line-height: 20px;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
</style>
