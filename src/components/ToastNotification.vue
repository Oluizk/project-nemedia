<script setup>
import { useUiStore } from '../stores/ui.js'

const uiStore = useUiStore()
</script>

<template>
  <Teleport to="body">
    <Transition name="toast">
      <div
        v-if="uiStore.toast.visible"
        class="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100]
               bg-success text-bg font-semibold px-6 py-3 rounded-lg shadow-xl
               text-sm whitespace-nowrap"
      >
        {{ uiStore.toast.message }}
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.toast-enter-active,
.toast-leave-active {
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease;
}
.toast-enter-from,
.toast-leave-to {
  transform: translateX(-50%) translateY(100px);
  opacity: 0;
}
.toast-enter-to {
  transform: translateX(-50%) translateY(0);
}
</style>
