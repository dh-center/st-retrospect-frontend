import Vue from 'vue';
import Vuex from 'vuex';

import app from './modules/app';

import createPersistedState from 'vuex-persistedstate';
import { AppModuleState } from '@/store/modules/app';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export interface RootState {
  app: AppModuleState
}

export default new Vuex.Store({
  modules: {
    app
  },
  plugins: [ createPersistedState() ],
  strict: debug
});
