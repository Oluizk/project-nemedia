<script setup>
import { useUiStore } from '../stores/ui.js'

const uiStore = useUiStore()

const filters = [
  { label: 'Todos',        value: 'all'     },
  { label: '🎬 Filmes',    value: 'filme'   },
  { label: '📺 Séries',    value: 'série'   },
  { label: '📚 Livros',    value: 'livro'   },
  { label: '🎧 Podcasts',  value: 'podcast' },
  { label: '▶ Vídeos',     value: 'vídeo'   },
  { label: '⭐ Mais salvos', value: 'saved' },
  { label: '🎬 Tem clipe', value: 'hasClip' },
]
</script>

<template>
  <div class="overflow-x-auto scrollbar-hide flex gap-2 py-2">
    <button
      v-for="f in filters"
      :key="f.value"
      class="flex-shrink-0 border px-4 py-1.5 rounded-full text-sm whitespace-nowrap cursor-pointer
             transition-all duration-200 font-sans"
      :class="
        uiStore.activeFilter === f.value
          ? 'bg-text text-bg border-text font-semibold'
          : 'bg-surface border-border text-muted hover:bg-surface2 hover:border-muted'
      "
      @click="uiStore.setFilter(f.value)"
    >
      {{ f.label }}
    </button>
  </div>
</template>
