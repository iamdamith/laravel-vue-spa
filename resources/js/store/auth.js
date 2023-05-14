import { defineStore } from 'pinia'
import api from './../services/api'
import Cookies from 'js-cookie'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: null,
    user: null
  }),
  actions: {
    async login(email, password) {
      try {
        const {data} = await api.post('/login', {email, password})
        this.setToken(data.token, true)
      } catch (error) {
        console.error(error)
        throw error
      }
    },
    async register(name, email, password, password_confirmation) {
      try {
        const {data} = await api.post('/register', {name, email, password, password_confirmation})
        this.setToken(data.token, true)
        this.setUser(data.user)
      } catch (error) {
        console.error(error)
        throw error
      }
    },
    async loggedUser() {
      try {
        const {data} = await api.get('/user')
        this.setUser(data)
      } catch (error) {
        console.error(error)
        throw error
      }
    },
    async fetchUser(){
      const {data} = await api.get('/user')
      if(data.user)
        this.user = data.user
    },
    logout() {
      this.token = null
      this.user = null
      Cookies.remove('token')

    },
    setToken(token, remember) {
      this.token = token
      Cookies.set('token', token, { expires: remember ? 365 : null })
    },
    setUser(user) {
      this.user = user
    }
  },
  getters: {
    isAuthenticated() {
      return !!( this.token  || Cookies.get('token'))
    },
    getToken(){
        return this.token
    }
  }
})