<script setup>
import { Clapperboard, Play } from 'lucide-vue-next'
import { useUiStore } from '../stores/ui.js'

const props = defineProps({
  item: { type: Object, required: true },
})

const uiStore = useUiStore()
</script>

<template>
  <div
    class="group cursor-pointer"
    @click="uiStore.openDetail(item.id)"
  >
    <!-- Poster -->
    <div class="relative aspect-[2/3] bg-surface2 rounded-xl overflow-hidden">
      <!-- Blurred bg emoji -->
      <span class="absolute inset-0 flex items-center justify-center text-8xl opacity-15 blur-sm pointer-events-none select-none">
        {{ item.emoji }}
      </span>

      <!-- Main emoji -->
      <span class="absolute inset-0 flex items-center justify-center text-5xl select-none z-10">{{ item.emoji }}</span>

      <!-- Clip indicator -->
      <Clapperboard
        v-if="item.hasClip"
        :size="12"
        class="absolute bottom-2 right-2 z-20 text-white/70"
      />

      <!-- Hover overlay -->
      <div
        class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity
               duration-200 flex items-center justify-center z-30"
      >
        <Play :size="24" class="text-white" />
      </div>
    </div>

    <!-- Card body -->
    <div class="mt-2">
      <div class="font-medium text-sm leading-snug line-clamp-1 mb-0.5">{{ item.title }}</div>
      <div class="text-xs text-muted mb-0.5 truncate">{{ item.meta }}</div>
      <div class="text-xs text-accent">★ {{ item.rating }}</div>
    </div>
  </div>
</template>
