<template>
  <div
    v-if="locationInstance"
    class="location-card"
  >
    <div
      class="location-card__image"
      :style="mainImageStyle"
    />
    <div class="location-card__main">
      <div class="location-card__wrap--bordered">
        <div class="persons">
          <div class="persons__title-block">
            <div class="persons__title-text persons__title-text--serif">
              {{ $t('persons-title[0]') }}
            </div>
            <div class="persons__title-text">
              {{ $t('persons-title[1]') }}
            </div>
          </div>
          <div
            v-if="personsInLocation"
            class="persons__list"
          >
            <router-link
              v-for="person in personsInLocation"
              :key="person.id"
              class="persons__item"
              :to="{ name: 'personInfo', params: { id: person.id } }"
            >
              <div
                class="persons__photo"
                :style="personMainPhotoStyle(person.mainPhotoLink)"
              />
              <div class="persons__name">
                {{ abbreviatedPersonName(person.lastName, person.firstName, person.patronymic) }}
              </div>
            </router-link>
          </div>
        </div>
        <h2 class="location-card__title">
          {{ locationInstance.name }}
        </h2>
        <div class="location-card__address">
          {{ locationAddress }}
        </div>
      </div>
      <div class="location-card__wrap--bordered">
        <div class="info-block__wrap">
          <div class="info-block">
            <div class="info-block__title">
              {{ $t('build-time') }}
            </div>
            <div class="info-block__content">
              {{ locationInstance.constructionDate || '??' }}
            </div>
          </div>
          <div class="info-block">
            <div class="info-block__title">
              {{ $t('architect') }}
            </div>
            <div class="info-block__content">
              {{ architects }}
            </div>
          </div>
        </div>
      </div>
      <Gallery
        v-if="locationInstance.photoLinks && locationInstance.photoLinks.length"
        :images="locationInstance.photoLinks"
      />
      <div class="location-card__links">
        <a href="wikipedia.org">
          {{ $t('source-link') }}
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// eslint-disable-next-line no-unused-vars
import LocationInstance from '@/types/locationInstance';
// eslint-disable-next-line no-unused-vars
import Person from '@/types/person';
import Gallery from '@/components/Gallery.vue';
import * as searchApi from '@/api/search';
// eslint-disable-next-line no-unused-vars
import { Route } from 'vue-router';
// eslint-disable-next-line no-unused-vars
import Relation from '@/types/relation';

@Component({
  components: {
    Gallery
  }
})
/**
 * Component for location card
 */
export default class LocationCard extends Vue {
  /**
   * LocationInstance to display
   */
  private locationInstance: LocationInstance | null = null;

  /**
   * Router enter hook for fetch data from API
   * @param to - new location
   * @param from - old location
   * @param next - callback
   */
  beforeRouteEnter(to: Route, from: Route, next: Function): void {
    searchApi.findLocationInstance(to.params.id).then(locationInstance => {
      next((vm: LocationCard) => (vm.locationInstance = locationInstance));
    });
  }

  /**
   * Router update hook for fetch data from API
   * @param to - new location
   * @param from - old location
   * @param next - callback
   */
  beforeRouteUpdate(to: Route, from: Route, next: Function): void {
    searchApi.findLocationInstance(to.params.id).then(locationInstance => {
      this.locationInstance = locationInstance;
    });
    next();
  }

  /**
   * Returns CSS code for displaying location image
   */
  get mainImageStyle() {
    if (this.locationInstance) {
      return { 'background-image': `url('${this.locationInstance.mainPhotoLink}')` };
    }

    return {};
  }

  /**
   * Get location address in one string
   */
  get locationAddress(): string {
    const locationAddresses = this.locationInstance?.location.addresses;

    if (locationAddresses && locationAddresses.length) {
      return `${locationAddresses[0].street} ` +
        `${locationAddresses[0].build} ` +
        `${locationAddresses[0].homeNumber} ` +
        `${locationAddresses[0].housing}`.replace(/\s{2,}/g, ' ');
    }
    return '';
  }

  /**
   * Return abbreviated person fullname (Pushkin A.S.)
   * @param lastName - person's lastname
   * @param firstName - person's firstname
   * @param patronymic - person's patronymic
   */
  private abbreviatedPersonName(lastName: string, firstName: string, patronymic: string): string {
    const abbreviatedFirstName = firstName ? firstName[0].toUpperCase() + '.' : '';
    const abbreviatedPatronymic = patronymic ? patronymic[0].toUpperCase() + '.' : '';

    return `${lastName} ${abbreviatedFirstName} ${abbreviatedPatronymic}`.replace(/\s{2,}/g, ' ');
  }

  /**
   * Return string with all architects
   */
  get architects(): string {
    if (!this.locationInstance?.architects || !this.locationInstance?.architects.length) {
      return '—';
    }
    const architects = this.locationInstance.architects.map(architect => this.abbreviatedPersonName(architect.lastName, architect.firstName, architect.patronymic));

    return architects.join(', ');
  }

  /**
   * Return array of persons from location
   */
  get personsInLocation(): Person[] | null {
    if (!this.locationInstance) {
      return null;
    }
    const relations = this.locationInstance.relations;

    if (!relations) {
      return null;
    }
    let persons = relations.reduce((result: Person[], relation: Relation) => {
      if (relation.person) {
        result.push(relation.person);
      }
      return result;
    }, []);

    /**
     * Remove duplicated objects
     */
    persons = persons.filter((person, index, self) => {
      return index === self.findIndex((p) => {
        return p.id === person.id;
      });
    });
    return persons;
  }

  /**
   * Returns CSS code for displaying person photo
   */
  private personMainPhotoStyle(personMainPhoto: string): object {
    if (personMainPhoto) {
      return { 'background-image': `url('${personMainPhoto}')` };
    }

    return {};
  }
}
</script>

<i18n>
{
  "ru": {
    "persons-title": [
      "Здесь были",
      "личности"
    ],
    "build-time": "Строительство",
    "architect": "Архитектор",
    "source-link": "Ссылка на источник"
  },
  "en": {
    "persons-title": [
      "Were here",
      "persons"
    ],
    "build-time": "Construction",
    "architect": "Architect",
    "source-link": "Source link"
  }
}
</i18n>

<style src="../styles/cards.css"></style>

<style>
  @import '../styles/custom-properties.css';

  .location-card {
    .persons {
      @apply --clearfix;

      &__title-block {
       float: left;
       width: 95px;
       margin-right: 20px;
      }

      &__title-text {
       color: #2d2d2d;
       font-size: 10px;
       line-height: 9px;
       letter-spacing: .2em;
       text-transform: uppercase;
      }

      &__title-text--serif {
        @apply --font-serif-main;

        margin-bottom: 5px;

        color: #2d2d2d;

        font-size: 20px;
        line-height: inherit;
        letter-spacing: normal;
        text-transform: none;
      }

      &__list {
        @apply --custom-scroll;
        display: flex;
        overflow: scroll;
      }

      &__item {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 40px;
        margin-right: 8px;
      }

      &__photo {
        width: 40px;
        height: 40px;
        margin-bottom: 3px;

        background-color: #f0f0f0;

        background-position: center;
        background-size: cover;

        border-radius: 50%;
      }

      &__name {
        @apply --font-sans-serif-main;
        color: #2D2D2D;
        font-size: 12px;
        white-space: nowrap;

        visibility: hidden
      }

      &__item:hover {
        cursor: pointer;

        .persons__name {
          visibility: visible
        }
      }
    }

    &__address {
      @apply --font-sans-serif-light;

      font-size: 14px;
    }
  }
</style>
