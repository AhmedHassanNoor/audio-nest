import { defineStore } from 'pinia'

export default defineStore('modal', {
  state: () => ({
    isOpen: false
  }),
  getters: {
    hiddenClass: (state) => (!state.isOpen ? 'hidden' : '')
  },

  actions: {
    toggleAuthModal() {
      this.isOpen = !this.isOpen
    }
  }
})
