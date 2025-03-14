<template>
  <div class="flex items-center gap-2">
    <button 
      v-for="lang in availableLanguages" 
      :key="lang.code" 
      @click="changeLanguage(lang.code)"
      :class="[
        'px-2 py-1 text-xs rounded-md transition-colors',
        currentLocale === lang.code 
          ? 'bg-primary text-primary-foreground' 
          : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
      ]"
    >
      {{ lang.label }}
    </button>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const availableLanguages = [
  { code: 'en-US', label: 'English' },
  { code: 'de-DE', label: 'Deutsch' },
  { code: 'zh-CN', label: '中文' }
]

const currentLocale = computed(() => locale.value)

const changeLanguage = (langCode: string) => {
  locale.value = langCode
  localStorage.setItem('preferredLanguage', langCode)
}
</script>
