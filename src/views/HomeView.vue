<script setup>
import { useRouter } from 'vue-router'
import { ArrowRight } from 'lucide-vue-next'
import MediaCardPortrait from '../components/MediaCardPortrait.vue'
import { useCatalogStore } from '../stores/catalog.js'
import { useUiStore } from '../stores/ui.js'

const router = useRouter()
const catalogStore = useCatalogStore()
const uiStore = useUiStore()

const floatingCards = [
  { title: 'Oppenheimer', meta: 'Nolan · 2023', emoji: '🎬', stars: '★★★★★' },
  { title: 'Sapiens', meta: 'Harari · 2011', emoji: '📚', stars: '★★★★★' },
  { title: 'The Bear', meta: 'Storer · 2022', emoji: '📺', stars: '★★★★★' },
]
</script>

<template>
  <!-- Hero -->
  <section class="relative min-h-screen flex items-center px-8 pt-20 pb-8 overflow-hidden">
    <!-- Radial gradient backgrounds -->
    <div
      class="absolute inset-0 pointer-events-none"
      style="
        background:
          radial-gradient(ellipse at 70% 40%, rgba(232,196,104,0.06) 0%, transparent 60%),
          radial-gradient(ellipse at 20% 80%, rgba(224,108,90,0.05) 0%, transparent 50%);
      "
    />

    <!-- Content -->
    <div class="relative max-w-[600px]">
      <div
        class="inline-block bg-accent/12 text-accent text-[0.75rem] font-medium
               px-3 py-1.5 rounded-full mb-5 border border-accent/25
               tracking-wider uppercase"
      >
        🌍 Curado pela comunidade
      </div>

      <h1 class="font-serif text-[clamp(2.4rem,5vw,3.8rem)] leading-[1.15] mb-4">
        Descubra o que vale <em class="italic text-accent">seu tempo</em>
      </h1>

      <p class="text-muted text-[1.05rem] leading-relaxed mb-8 max-w-[480px]">
        Livros, filmes, séries, podcasts e vídeos reunidos pela comunidade.
        Salve, avalie e assista clipes antes de mergulhar fundo.
      </p>

      <div class="flex gap-3 flex-wrap mb-10">
        <button
          class="bg-accent text-bg border-none px-7 py-3 rounded-lg text-sm font-semibold
                 cursor-pointer transition-all hover:-translate-y-0.5 hover:opacity-90"
          @click="router.push('/descobrir')"
        >
          Explorar catálogo
        </button>
        <button
          class="bg-transparent text-text border border-border px-7 py-3 rounded-lg
                 text-sm font-medium cursor-pointer transition-colors hover:border-muted"
          @click="router.push('/clipes')"
        >
          ▶ Ver clipes
        </button>
      </div>

      <!-- Stats -->
      <div class="flex gap-10">
        <div>
          <div class="font-serif text-[1.8rem] text-accent">2.4k</div>
          <div class="text-muted text-xs mt-0.5">Títulos</div>
        </div>
        <div>
          <div class="font-serif text-[1.8rem] text-accent">840</div>
          <div class="text-muted text-xs mt-0.5">Membros</div>
        </div>
        <div>
          <div class="font-serif text-[1.8rem] text-accent">3.1k</div>
          <div class="text-muted text-xs mt-0.5">Clipes</div>
        </div>
      </div>
    </div>

    <!-- Floating cards (lg only) -->
    <div
      class="hidden lg:flex absolute right-[4%] top-1/2 -translate-y-1/2
             flex-col gap-3 opacity-90"
    >
      <div
        v-for="(card, idx) in floatingCards"
        :key="idx"
        class="w-[180px] bg-surface border border-border rounded-xl overflow-hidden
               shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
        :style="{
          transform: idx % 2 === 0 ? 'rotate(-2deg)' : 'rotate(2deg)',
          animation: `float${idx % 2 === 0 ? '1' : '2'} ${6 + idx}s ease-in-out infinite`,
        }"
      >
        <div class="h-[90px] bg-surface2 flex items-center justify-center text-4xl">
          {{ card.emoji }}
        </div>
        <div class="p-2">
          <div class="text-[0.75rem] font-semibold truncate">{{ card.title }}</div>
          <div class="text-[0.65rem] text-muted">{{ card.meta }}</div>
          <div class="text-accent text-[0.6rem] mt-0.5">{{ card.stars }}</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Trending section -->
  <section class="py-20 px-8 max-w-[1200px] mx-auto">
    <div class="flex justify-between items-end mb-8">
      <h2 class="font-serif text-[1.7rem]">
        Em alta <span class="text-accent">esta semana</span>
      </h2>
      <button
        class="flex items-center gap-1 text-muted text-xs hover:text-accent transition-colors cursor-pointer"
        @click="router.push('/descobrir')"
      >
        Ver tudo <ArrowRight :size="12" />
      </button>
    </div>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
      <MediaCardPortrait
        v-for="item in catalogStore.trending"
        :key="item.id"
        :item="item"
      />
    </div>
  </section>

  <!-- With clips section -->
  <section class="py-20 px-8 max-w-[1200px] mx-auto">
    <div class="flex justify-between items-end mb-8">
      <h2 class="font-serif text-[1.7rem]">
        Têm <span class="text-accent">clipes</span>
      </h2>
      <button
        class="flex items-center gap-1 text-muted text-xs hover:text-accent transition-colors cursor-pointer"
        @click="router.push('/clipes')"
      >
        Ver clipes <ArrowRight :size="12" />
      </button>
    </div>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
      <MediaCardPortrait
        v-for="item in catalogStore.withClips"
        :key="item.id"
        :item="item"
      />
    </div>
  </section>
</template>

<style scoped>
@keyframes float1 {
  0%, 100% { transform: rotate(-2deg) translateY(0); }
  50% { transform: rotate(-2deg) translateY(-10px); }
}
@keyframes float2 {
  0%, 100% { transform: rotate(2deg) translateY(0); }
  50% { transform: rotate(2deg) translateY(-8px); }
}
</style>
