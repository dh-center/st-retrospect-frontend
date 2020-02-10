import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import { RouteConfig } from 'vue-router/types/router';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/search/:searchString',
    component: () => import(/* webpackChunkName: "mapView" */ '../views/Map.vue'),
    children: [
      {
        path: '',
        name: 'map',
        component: () => import(/* webpackChunkName: "mapView" */ '../components/RelationsList.vue')
      },
      {
        path: 'location/:id',
        name: 'locationInfo',
        component: () => import(/* webpackChunkName: "mapView" */ '../components/LocationCard.vue')
      },
      {
        path: 'person/:id',
        name: 'personInfo',
        component: () => import(/* webpackChunkName: "mapView" */ '../components/PersonCard.vue')
      }
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
