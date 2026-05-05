<script setup>
import { useRouter } from 'vue-router'
import { Bookmark, Clapperboard } from 'lucide-vue-next'
import { useUiStore } from '../stores/ui.js'

const props = defineProps({
  item: { type: Object, required: true },
})

const router = useRouter()
const uiStore = useUiStore()

function starsFor(rating) {
  return '★'.repeat(rating) + '☆'.repeat(5 - rating)
}
</script>

<template>
  <div
    class="group bg-surface border border-border rounded-xl overflow-hidden cursor-pointer
           transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl hover:border-accent/30"
  >
    <!-- Poster -->
    <div class="relative aspect-[2/3] bg-surface2 flex items-center justify-center overflow-hidden">
      <!-- Blurred bg emoji -->
      <span class="absolute inset-0 flex items-center justify-center text-8xl opacity-15 blur-sm pointer-events-none select-none">
        {{ item.emoji }}
      </span>

      <!-- Main emoji -->
      <span class="relative z-10 text-5xl select-none">{{ item.emoji }}</span>

      <!-- Type badge -->
      <span class="absolute top-1.5 left-1.5 bg-bg/85 backdrop-blur text-muted text-[0.6rem]
                   font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded">
        {{ item.type }}
      </span>

      <!-- Clip badge -->
      <span
        v-if="item.hasClip"
        class="absolute bottom-1.5 right-1.5 bg-danger/90 text-white text-[0.6rem]
               font-bold px-1.5 py-0.5 rounded flex items-center gap-1"
      >
        <Clapperboard :size="10" />
        clipe
      </span>

      <!-- Hover overlay -->
      <div
        class="absolute inset-0 bg-bg/90 opacity-0 group-hover:opacity-100 transition-opacity
               duration-200 flex flex-col items-center justify-center gap-2 z-20"
      >
        <button
          class="bg-accent text-bg border-none px-4 py-1.5 rounded-md text-xs font-bold
                 cursor-pointer w-4/5 transition-opacity hover:opacity-90"
          @click.stop="uiStore.openDetail(item.id)"
        >
          Ver detalhes
        </button>
        <button
          v-if="item.hasClip"
          class="bg-transparent text-text border border-border px-4 py-1.5 rounded-md
                 text-xs font-medium cursor-pointer w-4/5 hover:border-muted transition-colors"
          @click.stop="router.push('/clipes')"
        >
          Ver clipes
        </button>
      </div>
    </div>

    <!-- Card body -->
    <div class="p-2.5">
      <div class="text-[0.82rem] font-semibold leading-snug mb-0.5 truncate">{{ item.title }}</div>
      <div class="text-[0.7rem] text-muted mb-1.5 truncate">{{ item.meta }}</div>
      <div class="flex justify-between items-center">
        <span class="text-accent text-[0.65rem]">{{ starsFor(item.rating) }}</span>
        <span class="text-[0.65rem] text-muted flex items-center gap-0.5">
          <Bookmark :size="10" />
          {{ item.saves.toLocaleString('pt-BR') }}
        </span>
      </div>
    </div>
  </div>
</template>
