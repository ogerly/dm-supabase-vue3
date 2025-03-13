<template>
  <div>
    <h1 class="text-2xl font-semibold text-foreground mb-6">Matching</h1>
    
    <div class="bg-card rounded-lg border border-border p-6 shadow-sm mb-6">
      <h2 class="text-lg font-medium text-foreground mb-4">Find Your Perfect Match</h2>
      <p class="text-muted-foreground mb-4">Discover potential business partners and collaborators.</p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-background rounded-md p-4 border border-border">
          <h3 class="font-medium mb-2">Matching Preferences</h3>
          <div class="space-y-4">
            <div>
              <label class="text-sm text-muted-foreground block mb-1">Industry</label>
              <select class="w-full p-2 rounded-md border border-border bg-background">
                <option>All Industries</option>
                <option>Technology</option>
                <option>Finance</option>
                <option>Healthcare</option>
                <option>Education</option>
              </select>
            </div>
            
            <div>
              <label class="text-sm text-muted-foreground block mb-1">Location</label>
              <select class="w-full p-2 rounded-md border border-border bg-background">
                <option>Any Location</option>
                <option>Berlin</option>
                <option>Munich</option>
                <option>Hamburg</option>
                <option>Frankfurt</option>
              </select>
            </div>
            
            <button class="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm">
              Update Preferences
            </button>
          </div>
        </div>
        
        <div class="bg-background rounded-md p-4 border border-border">
          <h3 class="font-medium mb-2">Matching Stats</h3>
          <div class="space-y-2">
            <div class="flex justify-between">
              <span class="text-sm text-muted-foreground">Profile Views</span>
              <span class="text-sm">24</span>
            </div>
            <div class="flex justify-between">
              <span class="text-sm text-muted-foreground">Match Requests</span>
              <span class="text-sm">8</span>
            </div>
            <div class="flex justify-between">
              <span class="text-sm text-muted-foreground">Connections</span>
              <span class="text-sm">12</span>
            </div>
            <div class="flex justify-between">
              <span class="text-sm text-muted-foreground">Profile Completion</span>
              <span class="text-sm">85%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <h2 class="text-lg font-medium text-foreground mb-4">Suggested Matches</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="i in 6" :key="i" class="bg-card rounded-lg border border-border p-4 shadow-sm">
        <div class="flex items-center mb-4">
          <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">
            {{ ['A', 'B', 'C', 'D', 'E', 'F'][i-1] }}
          </div>
          <div>
            <h3 class="font-medium">Company {{ ['Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon', 'Zeta'][i-1] }}</h3>
            <p class="text-sm text-muted-foreground">{{ ['Technology', 'Finance', 'Healthcare', 'Education', 'Retail', 'Manufacturing'][i-1] }}</p>
          </div>
        </div>
        <p class="text-sm text-muted-foreground mb-4 line-clamp-3">
          {{ ['Looking for partnership in software development.', 
              'Seeking investment opportunities in startups.', 
              'Interested in healthcare innovation projects.', 
              'Developing educational platforms for schools.', 
              'Looking for supply chain optimization.', 
              'Seeking manufacturing partners in Europe.'][i-1] }}
        </p>
        <div class="flex space-x-2">
          <button class="bg-primary/10 text-primary px-3 py-1 rounded-md text-sm">Connect</button>
          <button class="bg-background text-muted-foreground border border-border px-3 py-1 rounded-md text-sm">View Profile</button>
        </div>
      </div>
    </div>
  </div>
</template>
