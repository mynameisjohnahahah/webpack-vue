import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home'
import Test from '../views/test'

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
        path: '/test',
        name: 'test',
        component: Test
    }
  ]
})

export default router