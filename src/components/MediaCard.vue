<script setup>
import { Clapperboard, Play } from 'lucide-vue-next'
import { useUiStore } from '../stores/ui.js'

const props = defineProps({
  item: { type: Object, required: true },
})

const uiStore = useUiStore()

const typeLabels = {
  filme:   'Filme',
  série:   'Série',
  livro:   'Livro',
  podcast: 'Podcast',
  vídeo:   'Vídeo',
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

      <!-- Clip indicator -->
      <Clapperboard
        v-if="item.hasClip"
        :size="14"
        class="absolute bottom-2 right-2 z-20 text-white/70"
      />

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
      <p class="text-xs text-muted mb-1">{{ item.meta }}</p>
      <p class="text-xs text-muted">
        {{ typeLabels[item.type] || item.type }} ·
        <span class="text-accent">★ {{ item.rating }}</span> ·
        {{ item.saves.toLocaleString('pt-BR') }} salvos
      </p>
    </div>
  </div>
</template>
