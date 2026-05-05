<script setup>
import { computed } from 'vue'
import { Plus } from 'lucide-vue-next'
import MediaCard from '../components/MediaCard.vue'
import { useCatalogStore } from '../stores/catalog.js'
import { useUiStore } from '../stores/ui.js'

const catalogStore = useCatalogStore()
const uiStore = useUiStore()

const filters = [
  { label: 'Todos', value: 'all' },
  { label: '🎬 Filmes', value: 'filme' },
  { label: '📺 Séries', value: 'série' },
  { label: '📚 Livros', value: 'livro' },
  { label: '🎙️ Podcasts', value: 'podcast' },
  { label: '🎥 Vídeos', value: 'vídeo' },
]

const filtered = computed(() => catalogStore.byType(uiStore.activeFilter))
</script>

<template>
  <div class="pt-[60px] min-h-screen">
    <div class="max-w-[1200px] mx-auto px-8 py-12">
      <!-- Header -->
      <div class="flex justify-between items-center mb-8">
        <h1 class="font-serif text-[1.7rem]">
          Catálogo <span class="text-accent">completo</span>
        </h1>
        <button
          class="flex items-center gap-1.5 bg-accent text-bg border-none px-4 py-2 rounded-lg
                 text-xs font-semibold cursor-pointer hover:opacity-85 transition-opacity"
          @click="uiStore.openModal()"
        >
          <Plus :size="14" />
          Adicionar
        </button>
      </div>

      <!-- Filters -->
      <div class="flex gap-2 flex-wrap mb-8">
        <button
          v-for="f in filters"
          :key="f.value"
          class="border px-4 py-1.5 rounded-full text-xs cursor-pointer font-sans
                 transition-all duration-200"
          :class="
            uiStore.activeFilter === f.value
              ? 'bg-accent text-bg border-accent font-semibold'
              : 'bg-surface border-border text-muted hover:bg-accent hover:text-bg hover:border-accent hover:font-semibold'
          "
          @click="uiStore.setFilter(f.value)"
        >
          {{ f.label }}
        </button>
      </div>

      <!-- Grid -->
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
        <MediaCard
          v-for="item in filtered"
          :key="item.id"
          :item="item"
        />
      </div>

      <p v-if="filtered.length === 0" class="text-muted text-center py-16">
        Nenhum título encontrado para este filtro.
      </p>
    </div>
  </div>
</template>
