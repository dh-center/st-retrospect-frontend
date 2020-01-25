import Vue from 'vue';
import Vuex from 'vuex';

import app from './modules/app';

import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

/**
 * Interface of store root state
 */
export interface RootState {
  [key: string]: undefined;
}

export default new Vuex.Store({
  modules: {
    app
  },
  plugins: [ createPersistedState({
    paths: [
      'app.interfaceLanguage',
      'app.lastSearchQuery'
    ]
  })
  ],
  strict: debug
});
