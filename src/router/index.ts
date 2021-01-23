import Vue from 'vue';
import VueRouter from 'vue-router';
import Map from '../views/Map.vue';
import { RouteConfig } from 'vue-router/types/router';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'home',
    component: Map
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
