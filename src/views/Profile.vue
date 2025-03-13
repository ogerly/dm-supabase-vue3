<template>
  <div>
    <h1 class="text-2xl font-semibold text-foreground mb-6">Profil</h1>
    
    <div class="bg-card rounded-lg border border-border p-6 shadow-sm mb-6">
      <div class="flex flex-col md:flex-row items-start gap-6">
        <div class="w-full md:w-auto flex flex-col items-center">
          <div class="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center text-4xl text-primary mb-4">
            {{ userInitials }}
          </div>
          <button class="text-sm text-primary hover:underline">Foto ändern</button>
        </div>
        
        <div class="flex-1">
          <h2 class="text-lg font-medium text-foreground mb-4">Persönliche Informationen</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label class="block text-sm text-muted-foreground mb-1">Vorname</label>
              <input type="text" class="w-full p-2 rounded-md border border-border bg-background" v-model="firstName" />
            </div>
            <div>
              <label class="block text-sm text-muted-foreground mb-1">Nachname</label>
              <input type="text" class="w-full p-2 rounded-md border border-border bg-background" v-model="lastName" />
            </div>
            <div>
              <label class="block text-sm text-muted-foreground mb-1">E-Mail</label>
              <input 
                type="email" 
                class="w-full p-2 rounded-md border border-border bg-background" 
                disabled 
                :value="supabaseUser?.email" 
              />
            </div>
            <div>
              <label class="block text-sm text-muted-foreground mb-1">Telefon</label>
              <input type="tel" class="w-full p-2 rounded-md border border-border bg-background" v-model="phone" />
            </div>
          </div>
          
          <div class="flex justify-end">
            <button class="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm">Änderungen speichern</button>
          </div>
        </div>
      </div>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-card rounded-lg border border-border p-6 shadow-sm">
        <h2 class="text-lg font-medium text-foreground mb-4">Passwort ändern</h2>
        
        <div class="space-y-4">
          <div>
            <label class="block text-sm text-muted-foreground mb-1">Aktuelles Passwort</label>
            <input type="password" class="w-full p-2 rounded-md border border-border bg-background" />
          </div>
          <div>
            <label class="block text-sm text-muted-foreground mb-1">Neues Passwort</label>
            <input type="password" class="w-full p-2 rounded-md border border-border bg-background" />
          </div>
          <div>
            <label class="block text-sm text-muted-foreground mb-1">Passwort bestätigen</label>
            <input type="password" class="w-full p-2 rounded-md border border-border bg-background" />
          </div>
          
          <div class="flex justify-end">
            <button class="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm">Passwort ändern</button>
          </div>
        </div>
      </div>
      
      <div class="bg-card rounded-lg border border-border p-6 shadow-sm">
        <h2 class="text-lg font-medium text-foreground mb-4">Benachrichtigungen</h2>
        
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <div>
              <h3 class="font-medium">E-Mail Benachrichtigungen</h3>
              <p class="text-sm text-muted-foreground">Erhalte wichtige Updates per E-Mail</p>
            </div>
            <div class="relative inline-flex h-6 w-11 items-center rounded-full bg-secondary">
              <input 
                type="checkbox" 
                checked
                class="peer absolute opacity-0 w-full h-full cursor-pointer" 
              />
              <span class="absolute inset-y-0 start-0 m-1 h-4 w-4 rounded-full bg-white peer-checked:bg-primary transition-all peer-checked:translate-x-5"></span>
            </div>
          </div>
          
          <div class="flex items-center justify-between">
            <div>
              <h3 class="font-medium">Push-Benachrichtigungen</h3>
              <p class="text-sm text-muted-foreground">Erhalte Echtzeit-Updates im Browser</p>
            </div>
            <div class="relative inline-flex h-6 w-11 items-center rounded-full bg-secondary">
              <input 
                type="checkbox" 
                class="peer absolute opacity-0 w-full h-full cursor-pointer" 
              />
              <span class="absolute inset-y-0 start-0 m-1 h-4 w-4 rounded-full bg-white peer-checked:bg-primary transition-all peer-checked:translate-x-5"></span>
            </div>
          </div>
          
          <div class="flex items-center justify-between">
            <div>
              <h3 class="font-medium">Marketingmitteilungen</h3>
              <p class="text-sm text-muted-foreground">Erhalte News und Updates zu neuen Features</p>
            </div>
            <div class="relative inline-flex h-6 w-11 items-center rounded-full bg-secondary">
              <input 
                type="checkbox" 
                checked
                class="peer absolute opacity-0 w-full h-full cursor-pointer" 
              />
              <span class="absolute inset-y-0 start-0 m-1 h-4 w-4 rounded-full bg-white peer-checked:bg-primary transition-all peer-checked:translate-x-5"></span>
            </div>
          </div>
          
          <div class="flex justify-end mt-6">
            <button class="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm">Einstellungen speichern</button>
          </div>
        </div>
      </div>
    </div>
    
    <div class="mt-6 bg-card rounded-lg border border-border p-6 shadow-sm">
      <h2 class="text-lg font-medium text-foreground mb-4">Konto</h2>
      
      <div class="space-y-6">
        <div>
          <h3 class="font-medium">Datenexport</h3>
          <p class="text-sm text-muted-foreground mb-2">Lade eine Kopie deiner persönlichen Daten herunter</p>
          <button class="bg-secondary hover:bg-secondary/80 text-secondary-foreground px-4 py-2 rounded-md text-sm">Daten exportieren</button>
        </div>
        
        <div>
          <h3 class="font-medium text-red-500">Gefahrenzone</h3>
          <p class="text-sm text-muted-foreground mb-2">Lösche dein Konto und alle zugehörigen Daten dauerhaft</p>
          <button class="bg-red-100 hover:bg-red-200 text-red-600 dark:bg-red-900/30 dark:hover:bg-red-900/50 dark:text-red-300 px-4 py-2 rounded-md text-sm">Konto löschen</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useSupabaseUser } from '@/auth/UserContextProvider'
import { supabase } from '~/lib/supabase'

const { supabaseUser } = useSupabaseUser(supabase)

const firstName = ref('Max')
const lastName = ref('Mustermann')
const phone = ref('+49 123 456789')

const userInitials = computed(() => {
  if (firstName.value && lastName.value) {
    return firstName.value.charAt(0) + lastName.value.charAt(0)
  }
  
  const email = supabaseUser.value?.email || ''
  if (email) {
    return email.charAt(0).toUpperCase()
  }
  return 'U'
})
</script>
