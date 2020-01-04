import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import UniqueId from 'vue-unique-id';
import SvgSprite from 'vue-svg-sprite';

Vue.use(UniqueId);
Vue.use(SvgSprite, {
  url: require('./assets/sprite.svg')
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
