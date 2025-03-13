<template>
  <div>
    <h1 class="text-2xl font-semibold text-foreground mb-6">Chat</h1>
    
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Chat list -->
      <div class="lg:col-span-1 bg-card rounded-lg border border-border shadow-sm overflow-hidden">
        <div class="p-4 border-b border-border">
          <div class="relative">
            <input type="text" 
              placeholder="Suche nach Nachrichten..." 
              class="pl-8 pr-4 py-2 rounded-md border border-border bg-background w-full"
            />
            <svg class="w-4 h-4 absolute left-2.5 top-2.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
        
        <div class="divide-y divide-border max-h-[500px] overflow-y-auto">
          <div v-for="i in 5" :key="i" class="p-4 hover:bg-secondary/30 transition-colors flex cursor-pointer" :class="i === 1 ? 'bg-secondary/40' : ''">
            <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">
              {{ ['A', 'B', 'C', 'D', 'E'][i-1] }}
            </div>
            <div class="flex-1 min-w-0">
              <div class="flex justify-between items-center mb-1">
                <h3 class="font-medium truncate">{{ ['Anna Müller', 'Bernd Schmidt', 'Clara Weber', 'David Fischer', 'Eva Wagner'][i-1] }}</h3>
                <span class="text-xs text-muted-foreground whitespace-nowrap ml-2">{{ ['10:45', '09:30', 'Gestern', 'Gestern', 'Montag'][i-1] }}</span>
              </div>
              <p class="text-sm text-muted-foreground truncate">
                {{ ['Vielen Dank für das Meeting gestern!', 'Wann können wir uns treffen?', 'Ich habe die Präsentation vorbereitet.', 'Bitte schau dir die Dokumente an.', 'Hallo, wie geht es dir?'][i-1] }}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Chat window -->
      <div class="lg:col-span-2 bg-card rounded-lg border border-border shadow-sm overflow-hidden flex flex-col h-[600px]">
        <div class="p-4 border-b border-border flex items-center">
          <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">
            A
          </div>
          <div>
            <h3 class="font-medium">Anna Müller</h3>
            <p class="text-xs text-muted-foreground">Online</p>
          </div>
        </div>
        
        <div class="flex-1 p-4 overflow-y-auto space-y-4">
          <div class="flex justify-start">
            <div class="bg-background rounded-lg p-3 max-w-[75%] shadow-sm">
              <p class="text-sm">Hallo! Wie läuft es mit dem Projekt?</p>
              <p class="text-xs text-muted-foreground mt-1">10:30</p>
            </div>
          </div>
          
          <div class="flex justify-end">
            <div class="bg-primary/10 text-primary-foreground rounded-lg p-3 max-w-[75%] shadow-sm">
              <p class="text-sm">Sehr gut! Wir sind fast fertig mit der ersten Phase.</p>
              <p class="text-xs text-muted-foreground mt-1">10:32</p>
            </div>
          </div>
          
          <div class="flex justify-start">
            <div class="bg-background rounded-lg p-3 max-w-[75%] shadow-sm">
              <p class="text-sm">Das klingt super! Wollen wir uns morgen treffen, um die Ergebnisse zu besprechen?</p>
              <p class="text-xs text-muted-foreground mt-1">10:34</p>
            </div>
          </div>
          
          <div class="flex justify-end">
            <div class="bg-primary/10 text-primary-foreground rounded-lg p-3 max-w-[75%] shadow-sm">
              <p class="text-sm">Ja, gerne! Wie wäre es um 14 Uhr?</p>
              <p class="text-xs text-muted-foreground mt-1">10:40</p>
            </div>
          </div>
          
          <div class="flex justify-start">
            <div class="bg-background rounded-lg p-3 max-w-[75%] shadow-sm">
              <p class="text-sm">Perfekt! Ich erstelle einen Kalendereintrag und schicke dir eine Einladung.</p>
              <p class="text-xs text-muted-foreground mt-1">10:45</p>
            </div>
          </div>
        </div>
        
        <div class="p-4 border-t border-border">
          <div class="flex items-center">
            <input type="text" 
              placeholder="Schreibe eine Nachricht..." 
              class="flex-1 px-4 py-2 rounded-md border border-border bg-background"
            />
            <button class="ml-2 bg-primary text-primary-foreground p-2 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
