import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/views/layout'
import Home from '@/views/layout/home'
import Category from '@/views/layout/category'
import Cart from '@/views/layout/cart'
import User from '@/views/layout/user'

import store from '@/store'

const Login = () => ('@/views/login')
const Myorder = () => ('@/views/myorder')
const Pay = () => ('@/views/pay')
const Prodetail = () => ('@/views/prodetail')
const Search = () => ('@/views/search')
const List = () => ('@/views/search/list')
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/login', component: Login },
    { path: '/myorder', component: Myorder },
    { path: '/pay', component: Pay },
    { path: '/prodetail/:id', component: Prodetail },
    { path: '/search', component: Search },
    { path: '/searchlist', component: List },
    {
      path: '/',
      redirect: '/home',
      component: Layout,
      children: [
        { path: '/home', component: Home },
        { path: '/category', component: Category },
        { path: '/cart', component: Cart },
        { path: '/user', component: User }
      ]
    }
  ]
})

const authUrls = ['/pay', '/myorder']
router.beforeEach((to, from, next) => {
  if (!authUrls.includes(to.path)) {
    next()
    return
  }
  const token = store.getters.getToken
  if (token) {
    next()
  } else {
    next('/login')
  }
})
export default router
