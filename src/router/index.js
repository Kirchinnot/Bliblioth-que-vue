import { createRouter, createWebHistory } from 'vue-router'

import Home from "../Components/HomeComponents.vue";
import Formulaire from "../Components/BookFormulaire.vue";
import FormUsers from "../Components/FormUsersComponents.vue";
import Orders from "../Components/OrdersComponents.vue";
import Settings from "../Components/SettingsComponents.vue";
import Users from "../Components/UsersComponents.vue";
import Reports from "../Components/ReportsComponents.vue";

const routes = [
  { 
    path: '/', 
    component: Home
  },
  { 
    path: '/formulaire', 
    component: Formulaire
  },
  { 
    path: '/formusers', 
    component: FormUsers 
  },
  { 
    path: '/orders', 
    component: Orders 
  },
  { 
    path: '/settings', 
    component: Settings 
  },
  { 
    path: '/users', 
    component: Users 
  },
  { 
    path: '/reports', 
    component: Reports 
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
