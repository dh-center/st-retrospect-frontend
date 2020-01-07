import { CHANGE_INTERFACE_LANG } from './actionTypes';
import i18n from '@/i18n';
import { Module } from 'vuex';
import { RootState } from '@/store';

/**
 * Enum of mutation types for this module
 */
const mutationTypes = {
  SET_INTERFACE_LANG: 'SET_INTERFACE_LANG' // Set language in which user interface will be displayed
};

/**
 * Module state
 * @typedef {object} AppModuleState
 * @property {string} interfaceLanguage - language in which user interface will be displayed
 */

/**
 * Creates module state
 * @return {AppModuleState}
 */
function initialState(): AppModuleState {
  return {
    interfaceLanguage: null
  };
}

/**
 * State of the App module
 */
export interface AppModuleState {
  /**
   * Language of interface
   */
  interfaceLanguage: string | null
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
