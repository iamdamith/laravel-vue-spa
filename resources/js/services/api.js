import axios from 'axios'
import { storeToRefs } from 'pinia'
import { useAuthStore } from './../store/auth'
import { useLanguageStore } from '../store/lang'

const api = axios.create({
  baseURL: import.meta.env.VITE_VUE_APP_API_URL
})

api.interceptors.request.use(config => {
  const auth = useAuthStore()
  const { getToken } = storeToRefs(auth)
  if (getToken.value) {
    config.headers.Authorization = `Bearer ${getToken.value}`
  }

  const languageStore = useLanguageStore()
  const { getLocale } = storeToRefs(languageStore)
  if(getLocale.value) {
    config.headers['Accept-Language'] = `${getLocale.value}`
  }

  return config
})

export default api