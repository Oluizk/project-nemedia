<script setup>
import { ref, onMounted } from 'vue'
import ShortItem from '../components/shorts/ShortItem.vue'
import { shorts } from '../data/mock.js'
import { useCatalogStore } from '../stores/catalog.js'

const catalogStore = useCatalogStore()
const showHint = ref(true)

onMounted(() => {
  setTimeout(() => {
    showHint.value = false
  }, 7000)
})

function getMedia(mediaId) {
  return catalogStore.catalog.find((i) => i.id === mediaId)
}
</script>

<template>
  <div class="h-screen overflow-y-scroll snap-y snap-mandatory scrollbar-none pt-[60px] bg-black">
    <ShortItem
      v-for="short in shorts"
      :key="short.id"
      :short="short"
      :media="getMedia(short.mediaId)"
    />

    <!-- Scroll hint -->
    <Transition name="fade">
      <div
        v-if="showHint"
        class="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-none
               bg-bg/80 backdrop-blur-sm px-5 py-2 rounded-full text-muted text-xs
               border border-border"
      >
        ↓ Role para ver mais clipes
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
