// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/HelloWorld.vue'
import DOM from '../components/DOM.vue'
import Reflected from '../components/Reflected.vue'
import Stored from '../components/Stored.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/dom', name: 'DOM', component: DOM },
  { path: '/reflected', name: 'Reflected', component: Reflected },
  { path: '/stored', name: 'Stored', component: Stored }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
