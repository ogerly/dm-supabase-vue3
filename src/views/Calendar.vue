<template>
  <div>
    <h1 class="text-2xl font-semibold text-foreground mb-6">Kalender</h1>
    
    <div class="bg-card rounded-lg border border-border p-6 shadow-sm mb-6">
      <div class="flex justify-between items-center mb-4">
        <div class="flex items-center gap-2">
          <button class="p-1 rounded hover:bg-secondary text-muted-foreground">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h2 class="text-lg font-medium text-foreground">März 2023</h2>
          <button class="p-1 rounded hover:bg-secondary text-muted-foreground">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        <div class="flex items-center gap-2">
          <button 
            @click="viewMode = 'month'" 
            class="px-3 py-1 rounded text-sm border border-border hover:bg-secondary"
            :class="viewMode === 'month' ? 'bg-secondary' : 'bg-transparent'"
          >
            Monat
          </button>
          <button 
            @click="viewMode = 'week'" 
            class="px-3 py-1 rounded text-sm border border-border hover:bg-secondary"
            :class="viewMode === 'week' ? 'bg-secondary' : 'bg-transparent'"
          >
            Woche
          </button>
          <button 
            @click="viewMode = 'day'" 
            class="px-3 py-1 rounded text-sm border border-border hover:bg-secondary"
            :class="viewMode === 'day' ? 'bg-secondary' : 'bg-transparent'"
          >
            Tag
          </button>
          <button class="bg-primary text-primary-foreground px-3 py-1 rounded-md text-sm ml-2">
            <span class="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
              </svg>
              Termin
            </span>
          </button>
        </div>
      </div>
      
      <!-- Month View -->
      <div v-if="viewMode === 'month'" class="bg-background rounded-lg border border-border overflow-hidden">
        <div class="grid grid-cols-7 text-center border-b border-border">
          <div v-for="day in ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So']" :key="day" class="py-2 text-sm font-medium">
            {{ day }}
          </div>
        </div>
        
        <div class="grid grid-cols-7 grid-rows-5 text-sm">
          <div v-for="i in 35" :key="i" 
            class="min-h-[100px] p-2 border-b border-r border-border relative" 
            :class="{ 
              'bg-secondary/20': i === 15,
              'text-muted-foreground': i <= 3 || i >= 32
            }">
            <span>{{ i <= 3 ? 27 + i : i >= 32 ? i - 31 : i - 3 }}</span>
            
            <div v-if="i === 10 || i === 15 || i === 18 || i === 22">
              <div class="mt-2 p-1 rounded text-xs bg-primary/10 text-primary truncate">10:00 Meeting mit Team</div>
            </div>
            <div v-if="i === 12 || i === 15 || i === 25">
              <div class="mt-2 p-1 rounded text-xs bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 truncate">14:00 Produktpräsentation</div>
            </div>
            <div v-if="i === 15 || i === 16">
              <div class="mt-2 p-1 rounded text-xs bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300 truncate">16:30 Kundentermin</div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Week View -->
      <div v-if="viewMode === 'week'" class="bg-background rounded-lg border border-border overflow-hidden">
        <div class="grid grid-cols-8 text-center border-b border-border">
          <div class="py-2 text-sm font-medium"></div>
          <div v-for="(day, index) in ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So']" :key="index" class="py-2 text-sm font-medium">
            {{ day }} <span class="block text-xs text-muted-foreground">{{ index + 1 }}. März</span>
          </div>
        </div>
        
        <div class="grid grid-cols-8">
          <!-- Time labels -->
          <div class="border-r border-border">
            <div v-for="hour in 12" :key="hour" class="h-20 border-b border-border p-1">
              <span class="text-xs text-muted-foreground">{{ (hour + 7) }}:00</span>
            </div>
          </div>
          
          <!-- Day columns -->
          <div v-for="day in 7" :key="day" class="border-r border-border">
            <div v-for="hour in 12" :key="hour" class="h-20 border-b border-border relative">
              <div v-if="day === 1 && hour === 3" class="absolute top-0 left-0 right-0 h-20 bg-primary/10 border-l-4 border-primary p-1 text-xs">
                <div class="font-medium text-primary">Team Meeting</div>
                <div class="text-muted-foreground">10:00 - 11:00</div>
              </div>
              
              <div v-if="day === 3 && hour === 6" class="absolute top-0 left-0 right-0 h-20 bg-blue-100 dark:bg-blue-900/30 border-l-4 border-blue-500 p-1 text-xs">
                <div class="font-medium text-blue-800 dark:text-blue-300">Produktpräsentation</div>
                <div class="text-muted-foreground">14:00 - 15:00</div>
              </div>
              
              <div v-if="day === 4 && hour === 9" class="absolute top-0 left-0 right-0 h-10 bg-amber-100 dark:bg-amber-900/30 border-l-4 border-amber-500 p-1 text-xs">
                <div class="font-medium text-amber-800 dark:text-amber-300">Kundentermin</div>
                <div class="text-muted-foreground">16:30 - 17:00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Day View -->
      <div v-if="viewMode === 'day'" class="bg-background rounded-lg border border-border overflow-hidden h-[600px]">
        <div class="p-3 border-b border-border flex justify-between items-center">
          <span class="text-sm font-medium">Mittwoch, 3. März</span>
          <div class="flex items-center gap-2">
            <button class="px-2 py-1 text-xs border border-border rounded hover:bg-secondary">Heute</button>
            <button class="p-1 rounded hover:bg-secondary text-muted-foreground">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button class="p-1 rounded hover:bg-secondary text-muted-foreground">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        
        <div class="flex h-full">
          <!-- Time column -->
          <div class="w-16 border-r border-border">
            <div v-for="hour in 14" :key="hour" class="h-20 border-b border-border p-1">
              <span class="text-xs text-muted-foreground">{{ (hour + 6) }}:00</span>
            </div>
          </div>
          
          <!-- Events column -->
          <div class="flex-1 relative">
            <div v-for="hour in 14" :key="hour" class="h-20 border-b border-border"></div>
            
            <div class="absolute top-[140px] left-0 right-2 h-20 bg-primary/10 border-l-4 border-primary p-2">
              <div class="font-medium text-primary">Team Meeting</div>
              <div class="text-xs text-muted-foreground">10:00 - 11:00</div>
              <div class="text-xs text-muted-foreground mt-1">Besprechungsraum A</div>
            </div>
            
            <div class="absolute top-[280px] left-0 right-2 h-20 bg-blue-100 dark:bg-blue-900/30 border-l-4 border-blue-500 p-2">
              <div class="font-medium text-blue-800 dark:text-blue-300">Produktpräsentation</div>
              <div class="text-xs text-muted-foreground">14:00 - 15:00</div>
              <div class="text-xs text-muted-foreground mt-1">Konferenzsaal</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-card rounded-lg border border-border p-6 shadow-sm">
        <h2 class="text-lg font-medium text-foreground mb-4">Anstehende Termine</h2>
        <div class="space-y-4">
          <div v-for="i in 3" :key="i" class="flex items-start">
            <div class="w-12 h-12 rounded-lg bg-primary/10 text-primary flex flex-col items-center justify-center mr-3">
              <span class="text-xs">März</span>
              <span class="font-bold">{{ [3, 5, 12][i-1] }}</span>
            </div>
            <div>
              <h3 class="font-medium">{{ ['Team Meeting', 'Kundenpräsentation', 'Strategiebesprechung'][i-1] }}</h3>
              <p class="text-xs text-muted-foreground">{{ ['10:00 - 11:00', '14:30 - 16:00', '09:00 - 10:30'][i-1] }}</p>
              <p class="text-xs text-muted-foreground">{{ ['Besprechungsraum A', 'Konferenzsaal', 'Online (Zoom)'][i-1] }}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="md:col-span-2 bg-card rounded-lg border border-border p-6 shadow-sm">
        <h2 class="text-lg font-medium text-foreground mb-4">Termin erstellen</h2>
        <div class="space-y-4">
          <div>
            <label class="block text-sm text-muted-foreground mb-1">Titel</label>
            <input type="text" class="w-full p-2 rounded-md border border-border bg-background" placeholder="Titel des Termins" />
          </div>
          
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-sm text-muted-foreground mb-1">Datum</label>
              <input type="date" class="w-full p-2 rounded-md border border-border bg-background" />
            </div>
            <div>
              <label class="block text-sm text-muted-foreground mb-1">Uhrzeit</label>
              <input type="time" class="w-full p-2 rounded-md border border-border bg-background" />
            </div>
          </div>
          
          <div>
            <label class="block text-sm text-muted-foreground mb-1">Ort</label>
            <input type="text" class="w-full p-2 rounded-md border border-border bg-background" placeholder="Ort des Termins" />
          </div>
          
          <div>
            <label class="block text-sm text-muted-foreground mb-1">Beschreibung</label>
            <textarea class="w-full p-2 rounded-md border border-border bg-background h-24" placeholder="Beschreibung des Termins"></textarea>
          </div>
          
          <div class="flex justify-end">
            <button class="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm">Termin speichern</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const viewMode = ref<'month' | 'week' | 'day'>('month')
</script>
