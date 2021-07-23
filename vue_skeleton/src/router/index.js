import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    redirect: {
      name: 'Home'
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/reports/add',
    name: 'ReportAdd',
    component: () => import(/* webpackChunkName: "report" */ '../views/report/Add.vue')
  },
  {
    path: '/reports/list',
    name: 'ReportList',
    component: () => import(/* webpackChunkName: "report" */ '../views/report/List.vue')
  },
  {
    path: '/reports/:id/edit',
    name: 'ReportEdit',
    component: () => import(/* webpackChunkName: "report" */ '../views/report/Edit.vue')
  },
  {
    path: '/:pathMatch(.*)',  // '/:pathMatch(.*)*' '/:pathMatch(.*)' '/:catchAll(.*)'
    redirect: '/'
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
