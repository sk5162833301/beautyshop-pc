import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        // 店铺总览
        path: '/shopOverview',
        name: 'shopOverview',
        // route level code-splitting
        // this generates a separate chunk (shopOverview.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "shopOverview" */ '../views/shopManagement/shopOverview.vue')
      },
      {
        // 店铺设置
        path: '/setUpShop',
        name: 'setUpShop',
        component: () => import(/* webpackChunkName: "setUpShop" */ '../views/shopManagement/setUpShop.vue')
      },
      {
        // 角色管理
        path: '/roleManagement',
        name: 'roleManagement',
        component: () => import(/* webpackChunkName: "roleManagement" */ '../views/authorityManagement/roleManagement.vue')
      },
      {
        // 账户管理
        path: '/accountManagement',
        name: 'accountManagement',
        component: () => import(/* webpackChunkName: "accountManagement" */ '../views/authorityManagement/accountManagement.vue')
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
