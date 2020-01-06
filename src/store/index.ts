import Vue from 'vue';
import Vuex from 'vuex';

import app from './modules/app';

import { AppModuleState } from '@/store/modules/app';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export interface RootState {
  [key: string]: undefined;
}

export default new Vuex.Store({
  modules: {
    app
  },
  plugins: [ createPersistedState() ],
  strict: debug
});
