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
import 'vue-class-component/hooks'; // import hooks type to enable auto-complete
import Component from 'vue-class-component';

Vue.use(VModal, { dynamic: true, injectModalsContainer: true });
Vue.use(UniqueId);
Vue.use(SvgSprite, {
  url: require('./assets/sprite.svg')
});

Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate' // for vue-router 2.2+
]);

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  integrations: [ new Integrations.Vue({ Vue, attachProps: true }) ]
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app');
