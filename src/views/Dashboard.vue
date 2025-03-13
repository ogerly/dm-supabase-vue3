<template>
  <div>
    <h1 class="text-2xl font-semibold text-foreground mb-6">Welcome to DreamMall</h1>
    
    <div class="bg-card rounded-lg border border-border p-6 shadow-sm mb-6">
      <h2 class="text-lg font-medium text-foreground mb-4">Dashboard Overview</h2>
      <p class="text-muted-foreground">You are now logged in as {{ supabaseUser?.email }}</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div class="bg-card rounded-lg border border-border p-6 shadow-sm">
        <h3 class="text-md font-medium text-foreground mb-2">Recent Matches</h3>
        <p class="text-sm text-muted-foreground">Check your recent matches and connections.</p>
        <router-link to="/matching" class="inline-block mt-4 text-primary hover:underline text-sm">
          View Matches
        </router-link>
      </div>
      
      <div class="bg-card rounded-lg border border-border p-6 shadow-sm">
        <h3 class="text-md font-medium text-foreground mb-2">Messages</h3>
        <p class="text-sm text-muted-foreground">You have no unread messages.</p>
        <router-link to="/chat" class="inline-block mt-4 text-primary hover:underline text-sm">
          Open Chat
        </router-link>
      </div>
      
      <div class="bg-card rounded-lg border border-border p-6 shadow-sm">
        <h3 class="text-md font-medium text-foreground mb-2">Upcoming Events</h3>
        <p class="text-sm text-muted-foreground">No upcoming events scheduled.</p>
        <router-link to="/calendar" class="inline-block mt-4 text-primary hover:underline text-sm">
          View Calendar
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useSupabaseUser } from '@/auth/UserContextProvider'
import { supabase } from '~/lib/supabase'

const { supabaseUser } = useSupabaseUser(supabase)
</script>
