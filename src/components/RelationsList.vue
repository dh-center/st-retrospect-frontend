<template>
  <div
    class="relations-list"
  >
    <div
      v-if="relationsList && relationsList.length"
    >
      <RelationInfo
        v-for="relation in relationsList"
        :key="relation.id"
        class="relations-list__relation-info"
        :relation="relation"
        @click.native="showLocationInstanceInfo(relation.locationInstance.id)"
      />
    </div>
    <div
      v-else
      class="relations-list__not-found-message"
    >
      {{ $t('not-found') }}
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { State } from 'vuex-class';
import RelationInfo from '@/components/RelationInfo.vue';
// eslint-disable-next-line no-unused-vars
import Relation from '@/types/relation';

@Component({
  components: {
    RelationInfo
  }
})
/**
 * Relations list for displaying in Aside bar
 */
export default class RelationsList extends Vue {
  /**
   * Relations list to display
   */
  @State(state => state.app.searchResult)
  private relationsList!: Relation[] | null;

  /**
   * Shows information about location instance in aside bar
   */
  private showLocationInstanceInfo(locationInstanceId: string) {
    this.$router.push({
      name: 'locationInfo',
      params: {
        id: locationInstanceId
      }
    });
  }
}
</script>

<i18n>
{
  "en": {
    "not-found": "Sorry, no results were found for your request"
  },
  "ru": {
    "not-found": "Извините, по вашему запросу ничего не найдено"
  }
}
</i18n>

<style>
  @import '../styles/custom-properties.css';

  .relations-list {
    &__relation-info {
      height: 90px;

      cursor: pointer;
    }

    &__not-found-message {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;

      background-color: #fff;
    }
  }
</style>
