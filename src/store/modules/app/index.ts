import { CHANGE_INTERFACE_LANG, SAVE_SEARCH_RESULTS } from './actionTypes';
import { Module } from 'vuex';
import { RootState } from '@/store';
import Location from '@/types/location';

/**
 * Enum of mutation types for this module
 */
const mutationTypes = {
  SET_INTERFACE_LANG: 'SET_INTERFACE_LANG', // Set language in which user interface will be displayed
  SET_SEARCH_RESULTS: 'SET_SEARCH_RESULTS' // Set new search results
};

/**
 * Creates module state
 */
function initialState(): AppModuleState {
  return {
    interfaceLanguage: null,
    searchResult: null
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
      state.searchResult = searchResults;
    }
  },
  actions: {
    /**
     * Set another language for user interface
     * @param {function} commit - standard vuex commit function
     * @param {String} lang - language to set
     */
    [CHANGE_INTERFACE_LANG]({ commit }, lang: string): void {
      commit(mutationTypes.SET_INTERFACE_LANG, lang);
    },
    /**
     * Set new search results
     * @param {AppModuleState} state - vuex module state
     * @param {Location[]} searchResults - results to save
     */
    [SAVE_SEARCH_RESULTS]({ commit }, searchResults: Location[]): void {
      console.log(searchResults);
      commit(mutationTypes.SET_SEARCH_RESULTS, searchResults);
    }
  }
};

export default module;
