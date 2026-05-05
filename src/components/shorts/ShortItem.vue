<script setup>
import { Play, Heart, MessageCircle, Bookmark, Share2 } from 'lucide-vue-next'
import { useUiStore } from '../../stores/ui.js'

const props = defineProps({
  short: { type: Object, required: true },
  media: { type: Object, required: true },
})

const uiStore = useUiStore()
</script>

<template>
  <!-- Full viewport slide -->
  <div class="h-[calc(100vh-60px)] bg-black snap-start flex items-center justify-center relative">

    <!-- Player + controls row -->
    <div class="flex items-end gap-3 w-full justify-center px-4">

      <!-- Player (9:16) -->
      <div class="relative w-full max-w-[400px] aspect-[9/16] rounded-2xl overflow-hidden flex-shrink-0">
        <!-- Blurred emoji background -->
        <div
          class="absolute inset-0 flex items-center justify-center
                 text-[10rem] blur-3xl opacity-30 scale-150 pointer-events-none select-none"
        >
          {{ media.emoji }}
        </div>

        <!-- Center play button -->
        <div class="absolute inset-0 flex items-center justify-center z-10">
          <button
            class="w-16 h-16 rounded-full bg-white/12 border-2 border-white/25
                   flex items-center justify-center backdrop-blur-sm
                   hover:bg-white/20 transition-colors cursor-pointer"
          >
            <Play :size="26" class="text-white ml-1" />
          </button>
        </div>

        <!-- Bottom info inside player -->
        <div class="absolute bottom-0 left-0 right-0 z-20 px-4 pb-4 pt-12"
             style="background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)">
          <!-- Mini poster + media info -->
          <div
            class="flex items-center gap-2.5 mb-2 cursor-pointer"
            @click="uiStore.openDetail(media.id)"
          >
            <div
              class="w-[38px] h-[54px] rounded-md bg-surface2 flex items-center justify-center
                     text-xl flex-shrink-0"
            >
              {{ media.emoji }}
            </div>
            <div>
              <div class="text-sm font-semibold text-white leading-snug">{{ media.title }}</div>
              <div class="text-[0.7rem] text-white/50 mt-0.5">{{ media.type }}</div>
              <div class="text-[0.7rem] text-accent mt-0.5">★ {{ media.rating }}</div>
            </div>
          </div>

          <!-- User -->
          <div class="flex items-center gap-1.5 mb-1.5">
            <span class="text-[0.75rem] text-white/60">{{ short.user }}</span>
          </div>

          <!-- Caption -->
          <p class="text-[0.8rem] text-white/80 leading-relaxed line-clamp-2">
            {{ short.caption }}
          </p>
        </div>

        <!-- Progress bar -->
        <div class="absolute bottom-0 left-0 right-0 h-[2px] bg-white/15 z-30">
          <div class="h-full bg-accent rounded-full" :style="{ width: short.progress + '%' }" />
        </div>
      </div>

      <!-- Controls column (right of player) -->
      <div class="flex flex-col gap-5 items-center pb-8">
        <div class="flex flex-col items-center gap-1 cursor-pointer">
          <Heart :size="22" class="text-white" />
          <span class="text-[0.65rem] text-white/60">{{ short.likes }}</span>
        </div>

        <div class="flex flex-col items-center gap-1 cursor-pointer">
          <MessageCircle :size="22" class="text-white" />
          <span class="text-[0.65rem] text-white/60">{{ short.comments }}</span>
        </div>

        <div class="flex flex-col items-center gap-1 cursor-pointer">
          <Bookmark :size="22" class="text-white" />
          <span class="text-[0.65rem] text-white/60">{{ short.saves }}</span>
        </div>

        <div class="flex flex-col items-center gap-1 cursor-pointer">
          <Share2 :size="22" class="text-white" />
        </div>
      </div>
    </div>
  </div>
</template>
