<template>
  <div v-if="isLogged">
    <Home />
  </div>
  <div v-else class="bg-background lg:px-4 min-h-screen flex items-center justify-center flex-col">
    <main class="sm:py-18 sm:gap-8 container relative mx-auto grid grid-cols-12 px-6 py-16 md:gap-16 md:py-24 lg:gap-16 lg:px-16 lg:py-24 xl:px-20">
      <section class="relative col-span-12 mb-16 md:col-span-7 md:mb-0 lg:col-span-6">
        <div class="relative lg:mx-auto lg:max-w-md 2xl:max-w-md bg-secondary rounded-2xl">
          <div :class="brandClasses[authBrandColor]" class="rounded-2xl lg:min-w-md 2xl:min-w-md">
            <div class="border-neutral-400 bg-background relative rounded-xl px-8 py-12 drop-shadow-sm">
              <div class="flex flex-col gap-6">
                <!-- Language Selector -->
                <div class="flex justify-end mb-2">
                  <LanguageSelector />
                </div>
                
                <div class="flex items-center gap-3">
                  <div
                    class="w-10 rounded-full p-2"
                    :style="{
                      background: backgroundColor,
                      color: currentColor
                    }"
                  >
                    <IconPalette />
                  </div>
                  <h1 class="text-foreground text-2xl">DreamMall</h1>
                </div>
                <p class="text-muted-foreground">
                  Sign in to access your account
                </p>
              </div>
              <Auth
                :appearance="{
                  theme: ThemeSupa,
                  brand: authBrandColor,
                  shape: authShape
                }"
                :supabaseClient="supabaseClient"
                v-model:view="view"
                :providers="['google', 'github']"
                :socialLayout="socialLayout"
                :theme="theme"
                :dark="isDark"
                :localization="{
                  variables: I18nVariables
                }"
                :redirect-to="redirectTo"
                show-links
              />
            </div>
          </div>
        </div>
      </section>
      <section class="col-span-12 md:col-span-5 lg:col-span-6">
        <div class="container mx-auto max-w-full sm:max-w-2xl relative">
          <UserContextProvider :supabaseClient="supabaseClient">
            <Hero />
          </UserContextProvider>

          <main
            class="flex justify-between items-center gap-8 w-full max-w-lg text-xs 2xl:text-sm text-foreground pb-20"
          >
            <div
              class="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 py-8 w-full"
            >
              <div class="flex flex-col gap-8">
                <!-- Brand color -->
                <div class="flex flex-col gap-6">
                  <div class="text-secondary-foreground text-base">
                    Markenfarbe
                  </div>
                  <div class="flex items-center gap-3">
                    <template v-for="color in brandList" :key="color">
                      <!--<TooltipProvider :key="color">-->
                      <TooltipProvider>
                        <Tooltip :delay-duration="0">
                          <TooltipTrigger>
                            <Button
                              :key="color"
                              variant="outline"
                              size="icon"
                              :class="
                                cn(
                                  `rounded-full border-${color}-500 text-brand-foreground bg-${color}-500/20 hover:bg-${color}-500/50`,
                                  authBrandColor === color && `border-2`
                                )
                              "
                              :style="{
                                background: colord(
                                  colors[color]['500']
                                ).toRgbString(),
                                borderColor: isDark
                                  ? colord(colors[color]['200']).toRgbString()
                                  : colord(colors[color]['800']).toRgbString()
                              }"
                              @click="authBrandColor = color"
                            />
                          </TooltipTrigger>
                          <TooltipContent>
                            {{ color.charAt(0).toUpperCase() + color.slice(1) }}
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </template>
                  </div>
                </div>

                <!-- Rounded corners -->
                <div class="flex flex-col gap-6">
                  <div class="text-secondary-foreground text-base">
                    Rounded corners
                  </div>
                  <div class="flex items-center gap-3">
                    <ToggleButton
                      v-model:selected="authShape"
                      :defaultValue="shapeList[0]"
                      class="rounded-none border-b-0 border-l-0 bg-neutral-100 dark:bg-neutral-800"
                    />
                    <ToggleButton
                      v-model:selected="authShape"
                      :defaultValue="shapeList[1]"
                      class="rounded-xl border-b-0 border-l-0 bg-neutral-100 dark:bg-neutral-800"
                    />
                    <ToggleButton
                      v-model:selected="authShape"
                      :defaultValue="shapeList[2]"
                      class="rounded-2xl border-b-0 border-l-0 bg-neutral-100 dark:bg-neutral-800"
                    />
                  </div>
                </div>

                <!-- Social Auth Layout -->
                <div class="flex flex-col gap-6">
                  <div class="text-secondary-foreground text-base">
                    Social Auth Layout
                  </div>
                  <div class="flex items-center gap-3">
                    <ToggleButton
                      v-model:selected="socialLayout"
                      :defaultValue="socialAlignments[0]"
                      class="flex items-center justify-center border-neutral-300/66 dark:border-neutral-800/66 bg-neutral-100 dark:bg-neutral-800"
                    >
                      <IconMenu
                        class="text-neutral-500 dark:text-neutral-200 w-6 rotate-90"
                      />
                    </ToggleButton>

                    <ToggleButton
                      v-model:selected="socialLayout"
                      :defaultValue="socialAlignments[1]"
                      class="flex items-center justify-center border-neutral-300/66 dark:border-neutral-800/66 bg-neutral-100 dark:bg-neutral-800"
                    >
                      <IconMenu
                        class="text-neutral-500 dark:text-neutral-200 w-6"
                      />
                    </ToggleButton>
                  </div>
                </div>
              </div>

              <!-- Component View -->
              <div class="flex flex-col gap-6">
                <div class="text-secondary-foreground text-base">
                  Component View
                </div>
                <div class="flex items-center justify-end gap-3">
                  <div class="relative flex flex-col gap-2">
                    <Button
                      v-for="v in views"
                      :key="v.id"
                      :value="v.id"
                      @click.prevent="view = v.id"
                      :variant="view === v.id ? 'default' : 'outline'"
                      class="focus:outline-none rounded text-sm"
                    >
                      {{ v.title }}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, watch, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { createClient } from '@supabase/supabase-js'
import colors from 'tailwindcss/colors'
import { colord } from 'colord'

import { isDark } from '~/composables/useDarkmode'
import { useLanguage } from './composables/useLanguage'
import { useSEOHeader } from '~/composables/useSEOHeader'
import Auth from '@/auth/Auth.vue'
import { AuthViewType } from '@/types'
import IconMenu from './components/IconMenu.vue'
import IconPalette from './components/IconPalette.vue'
import { Button } from '~/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '~/components/ui/tooltip'
import UserContextProvider, {
  useSupabaseUser
} from '@/auth/UserContextProvider'
import { cn } from '~/lib'
import { supabase } from '~/lib/supabase'
import Home from '~/views/Home.vue'  // TODO Fixed import statement - removed curly braces
import LanguageSelector from './components/LanguageSelector.vue'

const supabaseClient = supabase
const SITE_URL = import.meta.env.VITE_SITE_URL

useSEOHeader()
const { supabaseUser } = useSupabaseUser(supabaseClient)
const { t, locale } = useI18n() // Add t from useI18n
const { en, zh } = useLanguage()

const brandClasses: { [key: string]: string } = {
  emerald: 'container-emeraldshadow',
  violet: 'container-violetshadow',
  fuchsia: 'container-fuchsiashadow',
  sky: 'container-skyshadow',
  amber: 'container-ambershadow'
}

const brandList: (keyof typeof colors)[] = [
  'emerald',
  'violet',
  'fuchsia',
  'sky',
  'amber'
]
const shapeList = ['square', 'rounded', 'pill'] as const

const socialAlignments = ['horizontal', 'vertical'] as const

const views: { id: AuthViewType; title: string }[] = [
  { id: 'sign_in', title: 'Sign In' },
  { id: 'sign_up', title: 'Sign Up' },
  { id: 'magic_link', title: 'Magic Link' },
  { id: 'forgotten_password', title: 'Forgotten Password' },
  { id: 'update_password', title: 'Update Password' },
  { id: 'verify_otp', title: 'Verify Otp' },
  { id: 'anonymous_sign_in', title: 'Anonymous Sign-ins' }
]

const authBrandColor = ref(brandList[0])
const authShape = ref(shapeList[1])
const socialLayout = ref(socialAlignments[0])
const view = ref(views[0].id)

const currentColor = computed(() => {
  return colors[authBrandColor.value]['500']
})
const backgroundColor = computed(() => {
  const opacity = isDark.value ? 0.2 : 0.48
  const color = colors[authBrandColor.value]['500']
  return colord(color).alpha(opacity).toRgbString()
})

const theme = computed(() => (isDark.value ? 'dark' : 'default'))
const I18nVariables = computed(() => {
  let authVars;
  switch(locale.value) {
    case 'de-DE':
      authVars = t('auth', { locale: 'de-DE' });
      break;
    case 'zh-CN':
      authVars = t('auth', { locale: 'zh-CN' });
      break;
    case 'en-US':
    default:
      authVars = t('auth', { locale: 'en-US' });
      break;
  }
  
  // Convert single brace placeholders to double braces for Supabase Auth UI
  const convertedVars = {};
  for (const section in authVars) {
    convertedVars[section] = {};
    for (const key in authVars[section]) {
      if (typeof authVars[section][key] === 'string') {
        // Replace {provider} with {{provider}}
        convertedVars[section][key] = authVars[section][key].replace(/{(\w+)}/g, '{{$1}}');
      } else {
        convertedVars[section][key] = authVars[section][key];
      }
    }
  }
  
  return convertedVars;
})
const redirectTo = computed(() => {
  return view.value === 'forgotten_password'
    ? `${SITE_URL}/reset-password`
    : SITE_URL
})

const isLogged = computed(() => supabaseUser.value !== null)
const isAnonymous = computed(() => supabaseUser.value?.is_anonymous)

const handleSignOut = async () => {
  await supabaseClient.auth.signOut()
  
  // Force page reload to clear all application state
  window.location.href = '/'
}

// Check authentication state on startup
onMounted(async () => {
  // Check for saved language
  const savedLang = localStorage.getItem('preferredLanguage')
  if (savedLang && ['en-US', 'de-DE', 'zh-CN'].includes(savedLang)) {
    locale.value = savedLang
  }
  
  // Get the current session to ensure our auth state is accurate
  const { data } = await supabase.auth.getSession()
  
  // If no session found, ensure user is set to null
  if (!data.session) {
    supabaseUser.value = null
  }
})

// Simplified watcher - just log state changes
watch(
  () => supabaseUser.value,
  (newUser) => {
    console.log('Authentication state changed:', newUser)
  },
  { deep: true }
)
</script>

<style scoped>
.container-violetshadow {
  box-shadow: 0px 0px 256px rgb(139, 92, 246, 0.3);
}

.container-fuchsiashadow {
  box-shadow: 0px 0px 256px rgb(217, 70, 239, 0.3);
}

.container-emeraldshadow {
  box-shadow: 0px 0px 256px rgb(16, 185, 129, 0.3);
}

.container-skyshadow {
  box-shadow: 0px 0px 256px rgb(14, 165, 233, 0.3);
}

.container-ambershadow {
  box-shadow: 0px 0px 256px rgb(245, 158, 11, 0.3);
}

.dark .container-violetshadow {
  box-shadow: 0px 0px 256px rgb(139, 92, 246, 0.6);
}

.dark .container-fuchsiashadow {
  box-shadow: 0px 0px 256px rgb(217, 70, 239, 0.6);
}

.dark .container-emeraldshadow {
  box-shadow: 0px 0px 256px rgb(16, 185, 129, 0.6);
}

.dark .container-skyshadow {
  box-shadow: 0px 0px 256px rgb(14, 165, 233, 0.6);
}

.dark .container-ambershadow {
  box-shadow: 0px 0px 256px rgb(245, 158, 11, 0.6);
}
</style>
