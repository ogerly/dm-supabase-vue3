import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { availableLocales, i18n } from '../plugins/i18n'

export function useLanguage() {
  const { locale } = useI18n()
  const currentLocale = ref(locale.value)

  // English translations
  const en = {
    sign_up: {
      email_label: "Email",
      password_label: "Password",
      email_input_placeholder: "Your email address",
      password_input_placeholder: "Your password",
      button_label: "Sign up",
      social_provider_text: "Sign in with {{provider}}",
      link_text: "Don't have an account? Sign up",
      confirmation_text: "Check your email for the confirmation link"
    },
    sign_in: {
      email_label: "Email",
      password_label: "Password",
      email_input_placeholder: "Your email address",
      password_input_placeholder: "Your password", 
      button_label: "Sign in",
      social_provider_text: "Sign in with {{provider}}",
      link_text: "Already have an account? Sign in"
    },
    // ...other English translations
  }

  // Chinese translations
  const zh = {
    sign_up: {
      email_label: "电子邮箱",
      password_label: "密码",
      // ...other Chinese translations
    },
    // ...more Chinese translations
  }

  // Helper function to change language
  const changeLanguage = (lang: string) => {
    if (availableLocales.includes(lang)) {
      currentLocale.value = lang
      locale.value = lang
      localStorage.setItem('preferredLanguage', lang)
    }
  }

  return {
    currentLocale, 
    availableLocales,
    changeLanguage,
    en,
    zh
  }
}
