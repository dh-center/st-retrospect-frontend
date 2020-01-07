<template>
  <div
    :id="markerElementId"
    class="marker"
  >
    <svg
      v-svg
      :symbol="markerSvgName"
    />
    <div
      :id="$id('marker-popup')"
      class="popup"
    >
      <h3 class="popup__title">
        Доходный дом купцов Елисеевых
      </h3>
      <p class="popup__location-type">
        доходный дом
      </p>
      <p class="popup__address">
        Биржевой переулок 1
      </p>
      <p class="popup__quote">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequatur dolore, expedita facilis hic
        illum laudantium modi obcaecati saepe similique soluta suscipit. Aliquam animi atque blanditiis consequatur
        delectus dolorum eius enim error fuga id illo illum inventore itaque iure iusto laboriosam laudantium magni
        molestiae, mollitia obcaecati odio quam quo sunt totam ullam veritatis vero voluptatibus! Aperiam, esse, vel! A
        accusamus accusantium doloremque eum exercitationem fugit in labore laudantium necessitatibus neque odit, omnis
        perspiciatis possimus quos repellat reprehenderit totam! Asperiores beatae cum dicta doloremque id, iste magni
        molestias nisi nostrum numquam odio perspiciatis quisquam similique? Alias beatae delectus ducimus facilis hic
        incidunt maxime quis rem sunt voluptate. Architecto commodi cupiditate expedita illum, laborum magnam numquam
        praesentium quaerat quos rerum suscipit voluptatem. Ad consectetur consequuntur dolorem, ipsa modi nihil nostrum
        officia placeat quis recusandae rerum saepe similique veritatis voluptatem voluptatum. At, blanditiis commodi
        corporis dolore dolores ea eligendi, enim eos error eum eveniet fuga ipsum magni maxime natus neque nisi
        officiis optio placeat porro praesentium quam quod ratione rem repellendus sit sunt veniam, vitae voluptates
        voluptatibus. Consequatur debitis omnis porro quis recusandae! Beatae cupiditate expedita nam quos ratione
        voluptatem? Debitis deleniti distinctio doloremque fugiat quos? Accusamus adipisci amet aperiam aspernatur at
        cum cupiditate distinctio eius error esse est fuga harum illum ipsam labore laborum, laudantium magnam maiores
        nihil nostrum officiis perspiciatis placeat porro quia quisquam quo quos ratione rem rerum sed similique sit
        suscipit ullam vel veritatis vitae voluptas! Ducimus itaque magni nemo nostrum numquam pariatur perferendis
        possimus soluta suscipit totam. Aperiam, aut commodi earum eligendi eum neque pariatur provident, quia
        recusandae reiciendis, reprehenderit ullam velit voluptas? Ad alias aperiam aspernatur culpa dicta dignissimos
        eaque earum eos et eveniet facilis inventore magnam nihil nobis nostrum perferendis porro possimus qui quia
        reprehenderit rerum, saepe sequi sint soluta tempore tenetur totam velit veniam voluptas.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import mapboxgl from 'mapbox-gl';

@Component
/**
 * Component of marker on map
 */
export default class MapMarker extends Vue {
    /**
     * MapboxGL marker instance
     */
    private marker?: mapboxgl.Marker;

    /**
     * MapboxGL popup instance
     */
    private popup?: mapboxgl.Popup;

    /**
     * Unique ID of marker point HTML element
     */
    private markerElementId: string = this.$id('marker-point');

    /**
     * MapboxGL map for adding marker
     */
    @Prop({ type: mapboxgl.Map, required: true })
    private map!: mapboxgl.Map;

    /**
     * Coordinates of marker
     */
    @Prop({ type: Array, required: true })
    private lngLat!: [number, number];

    /**
     * Point svg name
     */
    @Prop({ type: String, required: true })
    private markerSvgName!: string;

    /**
     * Vue mounted hook
     * Setups marker for displaying
     */
    mounted() {
      this.popup = new mapboxgl.Popup({
        anchor: 'bottom',
        offset: 25,
        maxWidth: '300px'
      })
        .setDOMContent(document.getElementById(this.$id('marker-popup')) as HTMLElement)
        .addTo(this.map);
      this.marker = new mapboxgl.Marker({
        element: document.getElementById(this.markerElementId) as HTMLElement
      })
        .setLngLat(this.lngLat)
        .setPopup(this.popup)
        .addTo(this.map);
    }
}
</script>

<style>
  @import '../styles/custom-properties.css';

  .marker {
    width: 30px;
    height: 40px;

    cursor: pointer;

    svg {
      position: relative;
      top: -20px;

      width: 30px;
      height: 40px;
    }
  }

  .popup {
    min-width: 200px;
    max-width: 300px;
    padding: 0px 15px;

    &__title {
      @apply --font-serif-main;
      margin: 10px 0;

      color: #2D2D2D;
      font-weight: 400;
      font-size: 18px;
      line-height: 18px;
    }

    &__location-type {
      @apply --font-sans-serif-light;
      margin: 0;

      color: #7c7c7c;
      font-size: 14px;
      line-height: 16px;
    }

    &__address, &__quote {
      @apply --font-sans-serif-light;
      margin-top: 0;

      color: #2D2D2D;
      font-size: 14px;
      line-height: 16px;
    }

    &__quote {
      max-height: 200px;
      margin-top: 10px;
      padding-right: 10px;
      overflow-y: scroll;

      line-height: 20px;

      &::-webkit-scrollbar {
        width: 7px;
      }

      &::-webkit-scrollbar-thumb {
        background: #c4c4c4;
      }

      &::-webkit-scrollbar-track {
        background: transparent;
      }
    }
  }
</style>
