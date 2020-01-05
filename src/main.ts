import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import UniqueId from 'vue-unique-id';
import SvgSprite from 'vue-svg-sprite';
import i18n from './i18n';

Vue.use(UniqueId);
Vue.use(SvgSprite, {
  url: require('./assets/sprite.svg')
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app');
