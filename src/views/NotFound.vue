<template>
  <div class="flex flex-col items-center justify-center py-16">
    <div class="flex items-center justify-center w-24 h-24 mb-6 rounded-full bg-primary/10">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    </div>
    
    <h1 class="text-4xl font-bold text-foreground mb-2">404</h1>
    <h2 class="text-2xl font-semibold text-foreground mb-4">Seite nicht gefunden</h2>
    
    <p class="text-muted-foreground text-center max-w-md mb-8">
      Die von Ihnen gesuchte Seite existiert nicht oder wurde möglicherweise verschoben.
    </p>
    
    <div class="space-x-4">
      <button @click="goBack" class="bg-secondary text-secondary-foreground hover:bg-secondary/80 px-6 py-3 rounded-md">
        Zurück
      </button>
      
      <router-link to="/" class="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md">
        Zum Dashboard
      </router-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
  router.back()
}
</script>
