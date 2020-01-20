import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import UniqueId from 'vue-unique-id';
import SvgSprite from 'vue-svg-sprite';
import i18n from './i18n';
import VModal from 'vue-js-modal';
import * as Sentry from '@sentry/browser';
import * as Integrations from '@sentry/integrations';

Vue.use(VModal, { dynamic: true, injectModalsContainer: true });
Vue.use(UniqueId);
Vue.use(SvgSprite, {
  url: require('./assets/sprite.svg')
});

Sentry.init({
  dsn: 'https://20d5225f0be642899c1a75c49114305e@sentry.io/1888402',
  integrations: [ new Integrations.Vue({ Vue, attachProps: true }) ]
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app');

throw new Error('kek');
