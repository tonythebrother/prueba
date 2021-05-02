import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/LoginForm.vue'
import Home from '../components/Home.vue'
import Billing from '../components/Billing.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Login },
  {
    path: '/home',
    component: Home,
    children: [
      { path: 'billing', component: Billing },
    ]
  },
]

// eslint-disable-next-line no-new
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
