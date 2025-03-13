<template>
  <div>
    <h1 class="text-2xl font-semibold text-foreground mb-6">Projekte</h1>
    
    <div class="bg-card rounded-lg border border-border p-6 shadow-sm mb-6">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-lg font-medium text-foreground">Aktive Projekte</h2>
        <button class="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm">
          Neues Projekt
        </button>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="i in 6" :key="i" class="bg-background rounded-lg border border-border p-4 shadow-sm">
          <div class="flex justify-between items-start mb-3">
            <h3 class="font-medium">{{ ['Website Redesign', 'Mobile App Entwicklung', 'Marketing Kampagne', 'CRM Integration', 'Produktlaunch', 'Business Analysis'][i-1] }}</h3>
            <span :class="{
              'px-2 py-1 rounded-full text-xs': true,
              'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300': i % 3 === 0,
              'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300': i % 3 === 1,
              'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300': i % 3 === 2
            }">
              {{ i % 3 === 0 ? 'Aktiv' : i % 3 === 1 ? 'In Planung' : 'In Bearbeitung' }}
            </span>
          </div>
          <p class="text-sm text-muted-foreground mb-4">{{ ['Ein umfassendes Redesign unserer Unternehmenswebsite.', 
              'Entwicklung einer nativen App für Android und iOS.', 
              'Planung und Umsetzung einer digitalen Marketingkampagne.',
              'Integration unserer CRM-Systeme mit vorhandenen Tools.',
              'Vorbereitung und Durchführung des Produktlaunchs.',
              'Analyse der aktuellen Geschäftsprozesse.'][i-1] }}</p>
          
          <div class="mb-3">
            <div class="flex justify-between text-xs text-muted-foreground mb-1">
              <span>Fortschritt</span>
              <span>{{ [70, 30, 50, 85, 10, 60][i-1] }}%</span>
            </div>
            <div class="w-full bg-secondary rounded-full h-1.5">
              <div class="bg-primary h-1.5 rounded-full" :style="`width: ${[70, 30, 50, 85, 10, 60][i-1]}%`"></div>
            </div>
          </div>
          
          <div class="flex justify-between items-center">
            <div class="flex -space-x-2">
              <div v-for="j in 3" :key="j" class="w-6 h-6 rounded-full bg-primary/10 border-2 border-background flex items-center justify-center text-xs text-primary">
                {{ ['A', 'B', 'C', 'D', 'E', 'F'][j-1] }}
              </div>
              <div class="w-6 h-6 rounded-full bg-secondary/80 border-2 border-background flex items-center justify-center text-xs text-muted-foreground">
                +2
              </div>
            </div>
            
            <div class="text-xs text-muted-foreground">
              Frist: {{ ['15. Mai', '30. Juni', '10. April', '22. Juli', '5. August', '18. März'][i-1] }}
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="bg-card rounded-lg border border-border p-6 shadow-sm">
      <h2 class="text-lg font-medium text-foreground mb-4">Projekt Timeline</h2>
      <div class="relative">
        <div class="absolute left-3 h-full w-0.5 bg-border"></div>
        <div class="space-y-6 pl-10 relative">
          <div v-for="i in 4" :key="i" class="relative">
            <div class="absolute -left-10 mt-1 w-6 h-6 rounded-full border-4 border-background" :class="i === 1 ? 'bg-primary' : 'bg-secondary'"></div>
            <div class="mb-1">
              <h3 class="font-medium">{{ ['Sprint Planning', 'Design Phase', 'Development Phase', 'Testing & QA'][i-1] }}</h3>
              <p class="text-xs text-muted-foreground">{{ ['5. März 2023', '12. März 2023', '2. April 2023', '30. April 2023'][i-1] }}</p>
            </div>
            <p class="text-sm text-muted-foreground">{{ ['Ziele definieren und Arbeitsaufgaben zuweisen', 
                'Erstellen von UI/UX Designs und Prototyping', 
                'Implementierung der Kernfunktionalitäten', 
                'Umfassende Tests und Fehlerbehebung'][i-1] }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
