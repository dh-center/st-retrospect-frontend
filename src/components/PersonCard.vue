<template>
  <div
    v-if="person"
    class="person-card"
  >
    <div
      class="person-card__image"
      :style="mainImageStyle"
    />
    <div class="person-card__main">
      <div class="person-card__wrap--bordered">
        <h2 class="person-card__title">
          {{ personFullName }}
        </h2>
        <div class="info-block__wrap">
          <div class="info-block">
            <div class="info-block__title">
              {{ $t('years') }}
            </div>
            <div class="info-block__content">
              {{ person.birthDate || '??' }} &ndash; {{ person.deathDate || '??' }}
            </div>
          </div>
          <div class="info-block">
            <div class="info-block__title">
              {{ $t('profession') }}
            </div>
            <div
              class="info-block__content"
            >
              {{ person.profession ? person.profession : '&mdash;' }}
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="person.description"
        class="person-card__text"
      >
        {{ person.description }}
      </div>
      <Gallery
        v-if="person.photoLinks && person.photoLinks.length"
        :images="person.photoLinks"
      />
      <div class="person-card__links">
        <a href="wikipedia.org">
          {{ $t('source-link') }}
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Gallery from '@/components/Gallery.vue';
// eslint-disable-next-line no-unused-vars
import Person from '@/types/person';
// eslint-disable-next-line no-unused-vars
import { Route } from 'vue-router';
import * as searchApi from '@/api/search';

@Component({
  components: {
    Gallery
  }
})
/**
 * Component for person card
 */
export default class PersonCard extends Vue {
  /**
   * Person to display
   */
  private person: Person | null = null;

  /**
   * Router enter hook for fetch data from API
   * @param to - new location
   * @param from - old location
   * @param next - callback
   */
  beforeRouteEnter(to: Route, from: Route, next: Function): void {
    searchApi.findPerson(to.params.id).then(person => {
      next((vm: PersonCard) => (vm.person = person));
    });
  }

  /**
   * Router update hook for fetch data from API
   * @param to - new location
   * @param from - old location
   * @param next - callback
   */
  beforeRouteUpdate(to: Route, from: Route, next: Function): void {
    searchApi.findPerson(to.params.id).then(person => {
      this.person = person;
    });
    next();
  }

  /**
   * Returns CSS code for displaying person image
   */
  get mainImageStyle() {
    if (this.person) {
      return { 'background-image': `url('${this.person.mainPhotoLink}')` };
    }

    return {};
  }

  /**
   * Return person full name
   */
  get personFullName(): string {
    if (!this.person) {
      return '';
    }
    return `${this.person.lastName} ${this.person.firstName} ${this.person.patronymic}`;
  }
}
</script>

<i18n>
{
  "ru": {
    "years": "Годы жизни",
    "profession": "Деятельность",
    "source-link": "Ссылка на источник"
  },
  "en": {
    "years": "Years of life",
    "profession": "The activity",
    "source-link": "Source link"
  }
}
</i18n>

<style src="../styles/cards.css"></style>

<style>
  @import "../styles/custom-properties.css";

  .person-card {
    &__text {
      @apply --font-sans-serif-light;
      margin-bottom: 30px;

      font-size: 14px;
      line-height: 170%;
    }

    &__image {
      background-position: center -40px;
    }
  }
</style>
