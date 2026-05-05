<script setup>
import { ref, computed } from 'vue'
import { Search, Plus } from 'lucide-vue-next'
import MediaCard from '../components/MediaCard.vue'
import FilterBar from '../components/FilterBar.vue'
import { useCatalogStore } from '../stores/catalog.js'
import { useUiStore } from '../stores/ui.js'

const catalogStore = useCatalogStore()
const uiStore = useUiStore()

const localSearch = ref('')

const filtered = computed(() => {
  let items = catalogStore.catalog

  // Filter by type or special filters
  if (uiStore.activeFilter === 'hasClip') {
    items = items.filter((i) => i.hasClip)
  } else if (uiStore.activeFilter === 'saved') {
    items = [...items].sort((a, b) => b.saves - a.saves)
  } else if (uiStore.activeFilter !== 'all') {
    items = items.filter((i) => i.type === uiStore.activeFilter)
  }

  // Apply text search
  const q = localSearch.value.trim().toLowerCase()
  if (q) {
    items = items.filter(
      (i) =>
        i.title.toLowerCase().includes(q) ||
        i.meta.toLowerCase().includes(q) ||
        i.type.toLowerCase().includes(q)
    )
  }

  return items
})
</script>

<template>
  <div class="pt-[60px] min-h-screen">
    <div class="max-w-[1400px] mx-auto px-4 sm:px-8">
      <!-- Search bar -->
      <div class="py-6 max-w-xl mx-auto">
        <div
          class="flex items-center gap-2 bg-surface2 border border-border rounded-full px-4 py-2.5
                 transition-colors focus-within:border-accent"
        >
          <Search :size="16" class="text-muted flex-shrink-0" />
          <input
            v-model="localSearch"
            type="text"
            placeholder="Buscar títulos, criadores..."
            class="flex-1 bg-transparent border-none outline-none text-sm text-text
                   placeholder:text-muted/60 min-w-0"
          />
        </div>
      </div>

      <!-- Filter bar + desktop add button row -->
      <div class="flex items-center gap-4 mb-6">
        <div class="flex-1 min-w-0">
          <FilterBar />
        </div>
        <!-- Desktop add button -->
        <button
          class="hidden sm:flex items-center gap-1.5 bg-accent text-bg border-none px-4 py-2
                 rounded-lg text-xs font-semibold cursor-pointer hover:opacity-85 transition-opacity
                 flex-shrink-0"
          @click="uiStore.openModal()"
        >
          <Plus :size="14" />
          Adicionar
        </button>
      </div>

      <!-- Grid -->
      <div
        v-if="filtered.length > 0"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pb-24"
      >
        <MediaCard
          v-for="item in filtered"
          :key="item.id"
          :item="item"
        />
      </div>

      <!-- Empty state -->
      <div
        v-else
        class="flex flex-col items-center justify-center py-24 text-center"
      >
        <span class="text-5xl mb-4">🔍</span>
        <p class="text-muted text-sm">Nenhum título encontrado.</p>
        <p class="text-muted/60 text-xs mt-1">Tente outro filtro ou termo de busca.</p>
      </div>
    </div>

    <!-- Mobile FAB -->
    <button
      class="sm:hidden fixed bottom-6 right-6 z-40 bg-accent text-bg rounded-full p-4
             shadow-xl flex items-center justify-center"
      @click="uiStore.openModal()"
    >
      <Plus :size="22" />
    </button>
  </div>
</template>
