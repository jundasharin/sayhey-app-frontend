/* eslint-disable prettier/prettier */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/SignIn.vue'
import Register from '../views/SignUp.vue'
import Chat from '../views/Chat.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/signin',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Register',
    component: Register
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
