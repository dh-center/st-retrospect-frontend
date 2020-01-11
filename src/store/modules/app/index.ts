import { CHANGE_INTERFACE_LANG } from './actionTypes';
import { Module } from 'vuex';
import { RootState } from '@/store';
import Location from '@/types/location';
import locationsList from '@/store/modules/app/locations';

/**
 * Enum of mutation types for this module
 */
const mutationTypes = {
  SET_INTERFACE_LANG: 'SET_INTERFACE_LANG' // Set language in which user interface will be displayed
};

/**
 * Creates module state
 */
function initialState(): AppModuleState {
  return {
    interfaceLanguage: null,
    searchResult: locationsList
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
    }
  }
};

export default module;
