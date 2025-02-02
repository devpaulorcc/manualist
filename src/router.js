import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './views/Home.vue'; 
import DocPage from './views/DocPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/docs/:slug', component: DocPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
