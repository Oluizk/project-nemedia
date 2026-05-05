<script setup>
import { useRouter } from 'vue-router'
import { Play, Heart, MessageCircle, Bookmark, Share2 } from 'lucide-vue-next'
import { useUiStore } from '../../stores/ui.js'

const props = defineProps({
  short: { type: Object, required: true },
  media: { type: Object, required: true },
})

const router = useRouter()
const uiStore = useUiStore()

function starsFor(rating) {
  return '★'.repeat(rating) + '☆'.repeat(5 - rating)
}
</script>

<template>
  <div class="h-[calc(100vh-60px)] relative overflow-hidden bg-black snap-start">
    <!-- Blurred background emoji -->
    <div
      class="absolute inset-0 flex items-center justify-center
             text-[12rem] blur-3xl opacity-30 scale-150 pointer-events-none select-none"
    >
      {{ media.emoji }}
    </div>

    <!-- Center play button -->
    <div class="absolute inset-0 flex flex-col items-center justify-center gap-4">
      <button
        class="w-[72px] h-[72px] rounded-full bg-white/12 border-2 border-white/25
               flex items-center justify-center backdrop-blur-sm
               hover:bg-white/20 transition-colors cursor-pointer"
      >
        <Play :size="28" class="text-white ml-1" />
      </button>
    </div>

    <!-- Right action column -->
    <div class="absolute right-4 bottom-24 flex flex-col gap-6 items-center">
      <div class="flex flex-col items-center gap-1.5 cursor-pointer">
        <div
          class="w-11 h-11 rounded-full bg-white/10 border border-white/15
                 flex items-center justify-center backdrop-blur-sm hover:bg-white/20 transition-colors"
        >
          <Heart :size="20" class="text-white" />
        </div>
        <span class="text-[0.7rem] text-white/60">{{ short.likes }}</span>
      </div>

      <div class="flex flex-col items-center gap-1.5 cursor-pointer">
        <div
          class="w-11 h-11 rounded-full bg-white/10 border border-white/15
                 flex items-center justify-center backdrop-blur-sm hover:bg-white/20 transition-colors"
        >
          <MessageCircle :size="20" class="text-white" />
        </div>
        <span class="text-[0.7rem] text-white/60">{{ short.comments }}</span>
      </div>

      <div class="flex flex-col items-center gap-1.5 cursor-pointer">
        <div
          class="w-11 h-11 rounded-full bg-white/10 border border-white/15
                 flex items-center justify-center backdrop-blur-sm hover:bg-white/20 transition-colors"
        >
          <Bookmark :size="20" class="text-white" />
        </div>
        <span class="text-[0.7rem] text-white/60">{{ short.saves }}</span>
      </div>

      <div class="flex flex-col items-center gap-1.5 cursor-pointer">
        <div
          class="w-11 h-11 rounded-full bg-white/10 border border-white/15
                 flex items-center justify-center backdrop-blur-sm hover:bg-white/20 transition-colors"
        >
          <Share2 :size="20" class="text-white" />
        </div>
      </div>
    </div>

    <!-- Bottom left info -->
    <div class="absolute left-4 right-16 bottom-6">
      <!-- Mini poster + media info -->
      <div
        class="flex items-center gap-2.5 mb-2.5 cursor-pointer"
        @click="uiStore.openDetail(media.id)"
      >
        <div
          class="w-[42px] h-[60px] rounded-md bg-surface2 flex items-center justify-center
                 text-2xl border-[1.5px] border-white/20 flex-shrink-0"
        >
          {{ media.emoji }}
        </div>
        <div>
          <div class="text-sm font-semibold text-white leading-snug">{{ media.title }}</div>
          <div class="text-[0.72rem] text-white/50 mt-0.5">{{ media.type }}</div>
          <div class="text-[0.72rem] text-accent mt-0.5">{{ starsFor(media.rating) }}</div>
        </div>
      </div>

      <!-- Caption -->
      <p class="text-[0.82rem] text-white/80 leading-relaxed mb-3 line-clamp-2">
        {{ short.caption }}
      </p>

      <!-- User -->
      <div class="flex items-center gap-2">
        <div
          class="w-7 h-7 rounded-full bg-surface2 flex items-center justify-center text-sm
                 border-[1.5px] border-white/20"
        >
          {{ short.avatar }}
        </div>
        <span class="text-[0.78rem] text-white/70">{{ short.user }}</span>
      </div>
    </div>

    <!-- Progress bar -->
    <div class="absolute bottom-0 left-0 right-0 h-[2px] bg-white/15">
      <div class="h-full bg-accent" :style="{ width: short.progress + '%' }" />
    </div>
  </div>
</template>
