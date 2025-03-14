<template>
  <div class="min-h-screen bg-background">
    <!-- Navbar -->
    <nav class="bg-secondary border-b border-border px-4 py-3 flex items-center justify-between">
      <div class="flex items-center">
        <!-- Mobile menu button -->
        <button @click="isSidebarOpen = !isSidebarOpen" class="md:hidden mr-3 text-foreground">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        
        <div class="flex items-center gap-3">
          <div
            class="w-8 h-8 rounded-full p-1.5"
            :style="{
              background: backgroundColor,
              color: currentColor
            }"
          >
            <IconPalette />
          </div>
          <h1 class="text-xl font-semibold text-foreground">DreamMall</h1>
        </div>
      </div>
      
      <div class="flex items-center gap-4">
        <!-- Language Selector -->
        <LanguageSelector />
        
        <!-- Profile dropdown -->
        <div class="relative">
          <button @click="isProfileOpen = !isProfileOpen" class="flex items-center gap-2 text-foreground">
            <div class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              {{ userInitials }}
            </div>
            <span class="hidden md:block">{{ userName }}</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          <div v-if="isProfileOpen" class="absolute right-0 mt-2 w-48 bg-background rounded-md shadow-lg border border-border z-50">
            <div class="py-1">
              <router-link to="/profile" @click="isProfileOpen = false" class="block w-full text-left px-4 py-2 text-sm text-foreground hover:bg-secondary">
                Profile
              </router-link>
              <button @click="handleSignOut" class="block w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-secondary">
                Sign out
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <div class="flex">
      <!-- Sidebar -->
      <aside 
        :class="isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'" 
        class="fixed md:static w-64 h-[calc(100vh-3.5rem)] transition-transform duration-300 bg-background border-r border-border z-40"
      >
        <div class="p-4">
          <div class="space-y-1">
            <router-link to="/dashboard" class="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-secondary" :class="$route.path === '/dashboard' ? 'bg-primary/10 text-primary' : 'text-muted-foreground'">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Dashboard
            </router-link>
            
            <router-link to="/matching" class="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-secondary" :class="$route.path === '/matching' ? 'bg-primary/10 text-primary' : 'text-muted-foreground'">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              Matching
            </router-link>
            
            <router-link to="/contacts" class="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-secondary" :class="$route.path === '/contacts' ? 'bg-primary/10 text-primary' : 'text-muted-foreground'">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              Kontakte
            </router-link>
            
            <router-link to="/chat" class="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-secondary" :class="$route.path === '/chat' ? 'bg-primary/10 text-primary' : 'text-muted-foreground'">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              Chat
            </router-link>
            
            <router-link to="/tables" class="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-secondary" :class="$route.path === '/tables' ? 'bg-primary/10 text-primary' : 'text-muted-foreground'">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Tische
            </router-link>
             
            <router-link to="/projects" class="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-secondary" :class="$route.path === '/projects' ? 'bg-primary/10 text-primary' : 'text-muted-foreground'">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Projekte
            </router-link>
             
            <router-link to="/calendar" class="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-secondary" :class="$route.path === '/calendar' ? 'bg-primary/10 text-primary' : 'text-muted-foreground'">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Kalender
            </router-link>
          </div>
        </div>
      </aside>

      <!-- Main content -->
      <main class="flex-1 p-6">
        <div class="max-w-7xl mx-auto">
          <router-view />
        </div>
      </main>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { colord } from 'colord'
import colors from 'tailwindcss/colors'
import { supabase } from '~/lib/supabase'
import { useSupabaseUser } from '@/auth/UserContextProvider'
import IconPalette from '~/components/IconPalette.vue'
import { isDark } from '~/composables/useDarkmode'
import { useRouter } from 'vue-router'
import LanguageSelector from '~/components/LanguageSelector.vue'

const router = useRouter()
const { supabaseUser } = useSupabaseUser(supabase)

// UI state
const isSidebarOpen = ref(false)
const isProfileOpen = ref(false)

// User data
const userName = computed(() => {
  return supabaseUser.value?.email || supabaseUser.value?.id || 'User'
})

const userInitials = computed(() => {
  const email = supabaseUser.value?.email || ''
  if (email) {
    return email.charAt(0).toUpperCase()
  }
  return 'U'
})

// UI styling
const currentColor = computed(() => {
  return colors.emerald['500']
})

const backgroundColor = computed(() => {
  const opacity = isDark.value ? 0.2 : 0.48
  const color = colors.emerald['500']
  return colord(color).alpha(opacity).toRgbString()
})

// Get base URL for redirects
const BASE_URL = import.meta.env.BASE_URL || '/dm-supabase-vue3/'

// Actions
const handleSignOut = async () => {
  isProfileOpen.value = false // Close dropdown first
  
  // Sign out from Supabase
  await supabase.auth.signOut()
  
  // Redirect to root with proper base URL
  window.location.href = BASE_URL
}
</script>
