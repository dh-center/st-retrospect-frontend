import { CHANGE_INTERFACE_LANG, SEARCH_FOR_LOCATIONS, UPDATE_LAST_SEARCH_QUERY } from './actionTypes';
import { Module } from 'vuex';
import Vue from 'vue';
import { RootState } from '@/store';
import Location from '@/types/location';
import * as searchApi from '@/api/search';

/**
 * Enum of mutation types for this module
 */
const mutationTypes = {
  SET_INTERFACE_LANG: 'SET_INTERFACE_LANG', // Set language in which user interface will be displayed
  SET_SEARCH_RESULTS: 'SET_SEARCH_RESULTS', // Set new search results
  SET_LAST_SEARCH_QUERY: 'SET_LAST_SEARCH_QUERY' // Set new search query
};

/**
 * Creates module state
 */
function initialState(): AppModuleState {
  return {
    interfaceLanguage: null,
    searchResult: [],
    lastSearchQuery: ''
  };
}

/**
 * State of the App module
 */
export interface AppModuleState {
  /**
   * Language of interface
   */
  interfaceLanguage: string | null;

  /**
   * List with results from search to display it on map and aside bar
   */
  searchResult: Location[] | null;

  /**
   * Last search query of user
   */
  lastSearchQuery: string;
}

const module: Module<AppModuleState, RootState> = {
  state: initialState(),
  mutations: {
    /**
     * Set language in which user interface will be displayed
     * @param {AppModuleState} state - vuex module state
     * @param {String} lang - language to set
     */
    [mutationTypes.SET_INTERFACE_LANG](state: AppModuleState, lang: string) {
      state.interfaceLanguage = lang;
    },

    /**
     * Set new search results
     * @param {AppModuleState} state - vuex module state
     * @param {Location[]} searchResults - results to save
     */
    [mutationTypes.SET_SEARCH_RESULTS](state: AppModuleState, searchResults: Location[]) {
      Vue.set(state, 'searchResult', searchResults);
    },

    /**
     * Set new search results
     * @param {AppModuleState} state - vuex module state
     * @param newSearchQuery - new user's search query
     */
    [mutationTypes.SET_LAST_SEARCH_QUERY](state: AppModuleState, newSearchQuery: string) {
      state.lastSearchQuery = newSearchQuery;
    }
  },
  actions: {
    /**
     * Set another language for user interface
     * @param {function} commit - standard vuex commit function
     * @param {string} lang - language to set
     */
    [CHANGE_INTERFACE_LANG]({ commit }, lang: string): void {
      commit(mutationTypes.SET_INTERFACE_LANG, lang);
    },

    /**
     * Search for locations with user input
     * @param {function} commit - standard vuex commit function
     * @param {string} searchString - string with user input for searching
     */
    async [SEARCH_FOR_LOCATIONS]({ commit }, searchString): Promise<void> {
      const locations = await searchApi.findLocations(searchString);

      commit(mutationTypes.SET_SEARCH_RESULTS, locations);
    },

    /**
     * Search for locations with user input
     * @param {function} commit - standard vuex commit function
     * @param newSearchQuery - new user's search query
     */
    async [UPDATE_LAST_SEARCH_QUERY]({ commit }, newSearchQuery): Promise<void> {
      commit(mutationTypes.SET_LAST_SEARCH_QUERY, newSearchQuery);
    }
  }
};

export default module;
