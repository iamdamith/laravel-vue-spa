
// import { useLanguageStore } from '../store/lang'
import { createI18n } from 'vue-i18n'
import en from "./en.json";
import fr from "./fr.json";
// import { storeToRefs } from 'pinia'
// 
// const languageStore = useLanguageStore()
// const { getLocale } = storeToRefs(languageStore)

const languages = {
    en: en,
    fr: fr,
  }
  
const messages = Object.assign(languages)

const i18n = createI18n({
  locale: 'en',
  messages
})


// export async function loadMessages (locale) {
//   if (Object.keys(i18n.getLocaleMessage(locale)).length === 0) {
//     const messages = await import(`~/lang/${locale}`)
//     i18n.setLocaleMessage(locale, messages)
//   }

//   if (i18n.locale !== locale) {
//     i18n.locale = locale
//   }
// }

// (async function () {
//   await loadMessages(getLocale.locale)
// })()

export default i18n
