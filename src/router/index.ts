import { createRouter, createWebHistory } from 'vue-router'
import { supabase } from '~/lib/supabase'

// Views
import Home from '~/views/Home.vue'
import Dashboard from '~/views/Dashboard.vue'
import Matching from '~/views/Matching.vue'
import Contacts from '~/views/Contacts.vue'
import Chat from '~/views/Chat.vue'
import Tables from '~/views/Tables.vue'
import Projects from '~/views/Projects.vue'
import Calendar from '~/views/Calendar.vue'
import Profile from '~/views/Profile.vue'
import NotFound from '~/views/NotFound.vue'

const routes = [
  {
    path: '/',
    component: Home,
    meta: { requiresAuth: true },
    children: []
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true }
  },
  {
    path: '/matching',
    name: 'Matching',
    component: Matching,
    meta: { requiresAuth: true }
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts,
    meta: { requiresAuth: true }
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat,
    meta: { requiresAuth: true }
  },
  {
    path: '/tables',
    name: 'Tables',
    component: Tables,
    meta: { requiresAuth: true }
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
    meta: { requiresAuth: true }
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: Calendar,
    meta: { requiresAuth: true }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: { requiresAuth: true }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
]

// Get base URL from environment or fallback to GitHub Pages path
const BASE_URL = import.meta.env.BASE_URL || '/dm-supabase-vue3/'

const router = createRouter({
  history: createWebHistory(BASE_URL),
  routes
})

// Navigation guard to check authentication
router.beforeEach(async (to, from, next) => {
  // Check if route requires auth
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const { data } = await supabase.auth.getSession()
    
    if (!data.session) {
      // Redirect to root with proper base URL
      next(BASE_URL)
      return
    }
  }
  next()
})

export default router
