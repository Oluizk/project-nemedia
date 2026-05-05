import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CatalogView from '../views/CatalogView.vue'
import ShortsView from '../views/ShortsView.vue'
import CommunityView from '../views/CommunityView.vue'

const routes = [
  { path: '/',           component: HomeView,      name: 'home'      },
  { path: '/catalogo',   component: CatalogView,   name: 'catalog'   },
  { path: '/clipes',     component: ShortsView,    name: 'shorts'    },
  { path: '/comunidade', component: CommunityView, name: 'community' },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
