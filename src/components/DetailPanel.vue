<script setup>
import { computed } from 'vue'
import { X, Play, Plus } from 'lucide-vue-next'
import { useUiStore } from '../stores/ui.js'
import { useCatalogStore } from '../stores/catalog.js'

const uiStore = useUiStore()
const catalogStore = useCatalogStore()

const media = computed(() =>
  uiStore.detailPanelMediaId
    ? catalogStore.catalog.find((i) => i.id === uiStore.detailPanelMediaId)
    : null
)

const isOpen = computed(() => !!media.value)
</script>

<template>
  <Teleport to="body">
    <!-- Overlay -->
    <Transition name="fade">
      <div
        v-if="isOpen"
        class="fixed inset-0 bg-black/75 z-40"
        @click="uiStore.closeDetail()"
      />
    </Transition>

    <!-- Panel -->
    <Transition name="slide">
      <div
        v-if="isOpen"
        class="fixed right-0 top-[60px] bottom-0 w-full max-w-[480px] bg-surface
               border-l border-border z-50 overflow-y-auto"
      >
        <!-- Close button -->
        <button
          class="absolute top-4 right-4 w-8 h-8 flex items-center justify-center
                 text-muted hover:text-text transition-colors cursor-pointer"
          @click="uiStore.closeDetail()"
        >
          <X :size="18" />
        </button>

        <div class="p-6">
          <!-- Header -->
          <div class="flex gap-5 mb-6">
            <!-- Poster -->
            <div
              class="w-[100px] h-[144px] flex-shrink-0 bg-surface2 rounded-lg
                     flex items-center justify-center text-4xl border border-border relative overflow-hidden"
            >
              <span class="absolute inset-0 flex items-center justify-center text-7xl opacity-15 blur-sm">
                {{ media.emoji }}
              </span>
              <span class="relative z-10">{{ media.emoji }}</span>
            </div>

            <!-- Info -->
            <div class="flex-1 min-w-0">
              <h2 class="font-serif text-xl leading-snug mb-1">{{ media.title }}</h2>
              <p class="text-sm text-muted mb-2">{{ media.type }} · {{ media.meta }}</p>
              <p class="text-sm">
                <span class="text-accent">★ {{ media.rating }}</span>
                <span class="text-muted"> · {{ media.saves.toLocaleString('pt-BR') }} salvos</span>
              </p>
            </div>
          </div>

          <!-- About -->
          <section class="mb-6">
            <h3 class="font-serif text-base mb-2 text-text">Sobre</h3>
            <p class="text-muted text-sm leading-relaxed">{{ media.description }}</p>
          </section>

          <!-- Clips section heading -->
          <section v-if="media.clips && media.clips.length" class="mb-6">
            <h3 class="font-serif text-base mb-3 text-text">Clipes da comunidade</h3>
            <div class="flex flex-col gap-2">
              <div
                v-for="(clip, idx) in media.clips"
                :key="idx"
                class="flex items-center gap-3 cursor-pointer hover:text-text transition-colors"
              >
                <Play :size="14" class="text-accent flex-shrink-0" />
                <div class="flex-1 min-w-0">
                  <div class="text-xs font-medium truncate">{{ clip.name }}</div>
                </div>
                <div class="text-[0.65rem] text-muted flex-shrink-0">{{ clip.duration }}</div>
              </div>
            </div>

            <!-- Add clip button -->
            <button
              class="mt-3 flex items-center gap-1.5 text-muted text-xs hover:text-accent transition-colors cursor-pointer"
            >
              <Plus :size="14" />
              Adicionar clipe
            </button>
          </section>

          <!-- No clips yet -->
          <section v-else class="mb-6">
            <h3 class="font-serif text-base mb-3 text-text">Clipes da comunidade</h3>
            <button
              class="flex items-center gap-1.5 text-muted text-xs hover:text-accent transition-colors cursor-pointer"
            >
              <Plus :size="14" />
              Adicionar clipe
            </button>
          </section>

          <!-- Reviews -->
          <section v-if="media.reviews && media.reviews.length" class="mt-6">
            <h3 class="font-serif text-base mb-3 text-text">Avaliações</h3>
            <div class="flex flex-col gap-4">
              <div
                v-for="(review, idx) in media.reviews"
                :key="idx"
              >
                <div class="flex items-center gap-2 mb-1.5">
                  <div
                    class="w-7 h-7 rounded-full bg-surface2 flex items-center justify-center
                           text-xs font-semibold text-muted flex-shrink-0"
                  >
                    {{ review.user.charAt(0).toUpperCase() }}
                  </div>
                  <div>
                    <div class="text-xs font-semibold">{{ review.user }}</div>
                    <div class="text-accent text-[0.6rem]">★ {{ review.rating }}</div>
                  </div>
                </div>
                <p class="text-xs text-muted leading-relaxed pl-9">{{ review.text }}</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
