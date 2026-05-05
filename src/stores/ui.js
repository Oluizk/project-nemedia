import { defineStore } from 'pinia'

export const useUiStore = defineStore('ui', {
  state: () => ({
    isModalOpen: false,
    detailPanelMediaId: null,
    activeFilter: 'all',
    toast: { visible: false, message: '' },
  }),

  actions: {
    openModal() {
      this.isModalOpen = true
    },
    closeModal() {
      this.isModalOpen = false
    },

    openDetail(id) {
      this.detailPanelMediaId = id
    },
    closeDetail() {
      this.detailPanelMediaId = null
    },

    setFilter(type) {
      this.activeFilter = type
    },

    showToast(message) {
      this.toast = { visible: true, message }
      setTimeout(() => {
        this.toast = { visible: false, message: '' }
      }, 3000)
    },
  },
})
