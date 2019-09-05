import Vue from 'vue'
import Router from 'vue-router'

import book from '../pages/book'
import group from '../pages/group'
import guangbo from '../pages/guangbo'
import login from '../pages/login'
import reg from '../pages/reg'
import movei from '../pages/movei'
import nav from '../pages/nav'
import tab from '../pages/tab'
import index from '../pages/index'
import movepage from '../pages/movepage'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/book',
      name: 'book',
      component: book
    },
    {
      path: '/guangbo',
      name: 'guangbo',
      component: guangbo
    },
    {
      path: '/group',
      name: 'group',
      component: group
    },
    {
      path: '/reg',
      name: 'reg',
      component: reg
    },
    {
      path: '/movei',
      name: 'movei',
      component: movei
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/nav',
      name: 'nav',
      component: nav
    },
    {
      path: '/tab',
      name: 'tab',
      component: tab
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/movepage/:data',
      name: 'movepage',
      component: movepage
    }
  ]
})
