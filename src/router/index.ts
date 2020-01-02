import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/map',
    name: 'map',
    component: () => import(/* webpackChunkName: "mapView" */ '../views/Map.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
