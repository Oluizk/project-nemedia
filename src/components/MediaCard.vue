<script setup>
import { useRouter } from 'vue-router'
import { Bookmark, Clapperboard, Play } from 'lucide-vue-next'
import { useUiStore } from '../stores/ui.js'

const props = defineProps({
  item: { type: Object, required: true },
})

const router = useRouter()
const uiStore = useUiStore()

const typeColors = {
  filme:   'bg-blue-500/20 text-blue-300',
  série:   'bg-purple-500/20 text-purple-300',
  livro:   'bg-green-500/20 text-green-300',
  podcast: 'bg-orange-500/20 text-orange-300',
  vídeo:   'bg-red-500/20 text-red-300',
}

function starsFor(rating) {
  return '★'.repeat(rating) + '☆'.repeat(5 - rating)
}
</script>

<template>
  <div
    class="group cursor-pointer"
    @click="uiStore.openDetail(item.id)"
  >
    <!-- Thumbnail (16:9) -->
    <div class="relative aspect-video bg-surface2 rounded-xl overflow-hidden">
      <!-- Blurred emoji background -->
      <span
        class="absolute inset-0 flex items-center justify-center text-[6rem] opacity-20 blur-xl
               pointer-events-none select-none scale-150"
      >
        {{ item.emoji }}
      </span>

      <!-- Main emoji -->
      <span class="absolute inset-0 flex items-center justify-center text-5xl select-none z-10">
        {{ item.emoji }}
      </span>

      <!-- Clip badge -->
      <span
        v-if="item.hasClip"
        class="absolute bottom-2 right-2 z-20 bg-danger/90 text-white text-[0.6rem]
               font-bold px-1.5 py-0.5 rounded flex items-center gap-1"
      >
        <Clapperboard :size="10" />
        clipe
      </span>

      <!-- Hover overlay with play button -->
      <div
        class="absolute inset-0 bg-bg/70 opacity-0 group-hover:opacity-100 transition-opacity
               duration-200 flex items-center justify-center z-30"
      >
        <div
          class="w-12 h-12 rounded-full bg-white/15 border-2 border-white/30 backdrop-blur-sm
                 flex items-center justify-center"
        >
          <Play :size="20" class="text-white ml-0.5" />
        </div>
      </div>
    </div>

    <!-- Card body -->
    <div class="mt-2">
      <h3 class="font-semibold text-sm leading-snug line-clamp-2 mb-1">{{ item.title }}</h3>
      <div class="flex items-center gap-1.5 text-xs text-muted mb-1 flex-wrap">
        <span>{{ item.meta }}</span>
        <span
          class="inline-block text-[0.6rem] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded"
          :class="typeColors[item.type] || 'bg-surface2 text-muted'"
        >
          {{ item.type }}
        </span>
      </div>
      <div class="flex items-center gap-3 text-xs">
        <span class="text-accent text-[0.7rem]">{{ starsFor(item.rating) }}</span>
        <span class="text-muted flex items-center gap-0.5">
          <Bookmark :size="10" />
          {{ item.saves.toLocaleString('pt-BR') }}
        </span>
      </div>
    </div>
  </div>
</template>
