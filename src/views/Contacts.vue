<template>
  <div>
    <h1 class="text-2xl font-semibold text-foreground mb-6">Kontakte</h1>
    
    <div class="bg-card rounded-lg border border-border p-6 shadow-sm mb-6">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-lg font-medium text-foreground">Deine Verbindungen</h2>
        <div class="flex items-center">
          <div class="relative mr-2">
            <input type="text" 
              placeholder="Suche nach Kontakten..." 
              class="pl-8 pr-4 py-2 rounded-md border border-border bg-background w-full"
            />
            <svg class="w-4 h-4 absolute left-2.5 top-2.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <button class="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm">
            Neuer Kontakt
          </button>
        </div>
      </div>
      
      <div class="bg-background rounded-md border border-border">
        <div class="divide-y divide-border">
          <div v-for="i in 6" :key="i" class="p-4 hover:bg-secondary/30 transition-colors flex items-center justify-between">
            <div class="flex items-center">
              <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">
                {{ ['A', 'B', 'C', 'D', 'E', 'F'][i-1] }}
              </div>
              <div>
                <h3 class="font-medium">{{ ['Anna Müller', 'Bernd Schmidt', 'Clara Weber', 'David Fischer', 'Eva Wagner', 'Frank Bauer'][i-1] }}</h3>
                <p class="text-sm text-muted-foreground">{{ ['Technology Advisor', 'Financial Consultant', 'Healthcare Professional', 'Education Specialist', 'Business Developer', 'Marketing Expert'][i-1] }}</p>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <button class="text-primary hover:bg-primary/10 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </button>
              <button class="text-muted-foreground hover:bg-secondary p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
