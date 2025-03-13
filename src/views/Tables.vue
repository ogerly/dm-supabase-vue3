<template>
  <div>
    <h1 class="text-2xl font-semibold text-foreground mb-6">Tische</h1>
    
    <div class="bg-card rounded-lg border border-border p-6 shadow-sm mb-6">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-lg font-medium text-foreground">Verfügbare Tische</h2>
        <button class="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm">
          Neuen Tisch reservieren
        </button>
      </div>
      
      <div class="overflow-x-auto">
        <table class="w-full border-collapse">
          <thead>
            <tr class="border-b border-border">
              <th class="text-left p-3 text-sm font-medium text-muted-foreground">Tisch Nr.</th>
              <th class="text-left p-3 text-sm font-medium text-muted-foreground">Kapazität</th>
              <th class="text-left p-3 text-sm font-medium text-muted-foreground">Bereich</th>
              <th class="text-left p-3 text-sm font-medium text-muted-foreground">Status</th>
              <th class="text-left p-3 text-sm font-medium text-muted-foreground">Nächste Verfügbarkeit</th>
              <th class="text-left p-3 text-sm font-medium text-muted-foreground">Aktionen</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="i in 8" :key="i" class="border-b border-border hover:bg-secondary/30 transition-colors">
              <td class="p-3 text-sm">Tisch {{ i }}</td>
              <td class="p-3 text-sm">{{ [4, 6, 2, 8, 4, 6, 2, 4][i-1] }} Personen</td>
              <td class="p-3 text-sm">{{ ['Hauptraum', 'Terrasse', 'Bar', 'Hauptraum', 'Terrasse', 'Bar', 'Hauptraum', 'Terrasse'][i-1] }}</td>
              <td class="p-3 text-sm">
                <span :class="{
                  'px-2 py-1 rounded-full text-xs': true,
                  'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300': i % 3 === 0,
                  'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300': i % 3 === 1,
                  'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300': i % 3 === 2
                }">
                  {{ i % 3 === 0 ? 'Verfügbar' : i % 3 === 1 ? 'Besetzt' : 'Reserviert' }}
                </span>
              </td>
              <td class="p-3 text-sm">{{ i % 3 === 0 ? 'Sofort' : i % 3 === 1 ? 'In 2 Stunden' : 'Heute, 18:00 Uhr' }}</td>
              <td class="p-3 text-sm">
                <div class="flex items-center space-x-2">
                  <button 
                    class="text-primary hover:bg-primary/10 p-1.5 rounded" 
                    :disabled="i % 3 === 1"
                    :class="{ 'opacity-50 cursor-not-allowed': i % 3 === 1 }">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                  <button class="text-muted-foreground hover:bg-secondary p-1.5 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    
    <div class="bg-card rounded-lg border border-border p-6 shadow-sm">
      <h2 class="text-lg font-medium text-foreground mb-4">Raumplan</h2>
      <div class="bg-background rounded-lg border border-border p-6 h-80 flex items-center justify-center">
        <p class="text-muted-foreground">Interaktiver Raumplan wird hier angezeigt</p>
      </div>
    </div>
  </div>
</template>
