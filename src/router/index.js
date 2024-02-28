import { createRouter, createWebHistory } from 'vue-router'
import AllRecipesView from '@/views/AllRecipesView.vue'
import FavouriteView from '@/views/FavouriteView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/allrecipes',
    },
    {
      path: '/allrecipes',
      name: 'allrecipes',
      component: AllRecipesView,
    },
    {
      path: '/favourite',
      name: 'favourite',
      component: FavouriteView,
    },
  ]
})

export default router
