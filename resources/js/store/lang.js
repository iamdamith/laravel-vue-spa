import { defineStore } from 'pinia'
import Cookies from 'js-cookie'

export const useLanguageStore = defineStore('language', {
  state: () => ({
    local: 'en-gb',
    locals:{
      "en":"en-gb",
      "fr":"fr-fr"
    }
  }),
  actions: {
    setLocale(locale, remember) {
        this.local = locale
        Cookies.set('locale', locale, { expires: remember ? 365 : null })
    }
  },
  getters: {
    getLocale(){
        return this.local
    },
    getLocales(){
        return this.locals
    }
  }
})