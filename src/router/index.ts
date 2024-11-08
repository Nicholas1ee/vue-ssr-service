import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

export function createRouter() {
  const routes: Array<RouteConfig> = [
    {
      path: '/',
      name: 'index',
      component: HomeView
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  ]
  
  const router = new VueRouter({
    mode: 'history',
    routes
  })

  return router
}
