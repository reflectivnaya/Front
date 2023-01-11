import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ContactsView from "@/views/ContactsView";
import InfoView from "@/views/InfoView";
import LoginView from "@/views/LoginView"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: ContactsView,
  },
  {
    path: '/info',
    name: 'info',
    component: InfoView,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes
});
