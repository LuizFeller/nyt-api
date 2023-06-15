import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import ArticlesView from '../views/Articles.vue'
import BooksView from '../views/Books.vue'
import BookDetailView from '../views/BookDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/articles',
      name: 'articles',
      component: ArticlesView,
    },
    {
      path: '/books',
      name: 'books',
      component: BooksView
    },
    {
      path: '/book/:isbn',
      name: 'detail',
      component: BookDetailView
    },
  ]
})

export default router
