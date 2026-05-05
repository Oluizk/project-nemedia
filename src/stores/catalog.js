import { defineStore } from 'pinia'
import { catalog as mockCatalog, activities as mockActivities } from '../data/mock.js'

export const useCatalogStore = defineStore('catalog', {
  state: () => ({
    catalog: [...mockCatalog],
    activities: [...mockActivities],
  }),

  getters: {
    trending: (state) =>
      [...state.catalog].sort((a, b) => b.saves - a.saves).slice(0, 6),

    withClips: (state) => state.catalog.filter((item) => item.hasClip),

    byType: (state) => (type) => {
      if (!type || type === 'all') return state.catalog
      return state.catalog.filter((item) => item.type === type)
    },
  },

  actions: {
    addMedia(item) {
      const newItem = {
        ...item,
        id: this.catalog.length + 1,
        saves: 0,
        clips: [],
        reviews: [],
      }
      this.catalog.push(newItem)
      this.activities.unshift({
        id: this.activities.length + 1,
        user: 'você',
        avatar: '⭐',
        action: 'adicionou ao catálogo',
        mediaId: newItem.id,
        time: 'agora mesmo',
      })
    },

    addClip(mediaId, clip) {
      const item = this.catalog.find((i) => i.id === mediaId)
      if (item) {
        item.clips.push(clip)
        item.hasClip = true
      }
    },
  },
})
