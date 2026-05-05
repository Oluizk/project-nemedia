<script setup>
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { Plus, User, Menu, X } from 'lucide-vue-next'
import { useUiStore } from '../stores/ui.js'

const router = useRouter()
const uiStore = useUiStore()
const mobileMenuOpen = ref(false)

function closeMenu() {
  mobileMenuOpen.value = false
}
</script>

<template>
  <nav class="fixed top-0 inset-x-0 z-50 h-[60px] flex items-center justify-between px-4 sm:px-8
              bg-bg/85 backdrop-blur-md border-b border-border">
    <!-- Logo -->
    <button
      class="font-serif text-accent text-xl tracking-wide cursor-pointer bg-transparent border-none"
      @click="router.push('/')"
    >
      Media<span class="text-text">Club</span>
    </button>

    <!-- Desktop links -->
    <div class="hidden sm:flex gap-8 text-sm font-medium">
      <RouterLink
        to="/"
        class="no-underline transition-colors duration-200"
        :class="$route.name === 'home' ? 'text-text' : 'text-muted hover:text-text'"
      >
        Início
      </RouterLink>
      <RouterLink
        to="/descobrir"
        class="no-underline transition-colors duration-200"
        :class="$route.name === 'discover' ? 'text-text' : 'text-muted hover:text-text'"
      >
        Descobrir
      </RouterLink>
      <RouterLink
        to="/clipes"
        class="no-underline transition-colors duration-200"
        :class="$route.name === 'shorts' ? 'text-text' : 'text-muted hover:text-text'"
      >
        Clipes
      </RouterLink>
      <RouterLink
        to="/comunidade"
        class="no-underline transition-colors duration-200"
        :class="$route.name === 'community' ? 'text-text' : 'text-muted hover:text-text'"
      >
        Comunidade
      </RouterLink>
    </div>

    <!-- Desktop right actions -->
    <div class="hidden sm:flex items-center gap-3">
      <button
        class="flex items-center gap-1.5 text-sm text-muted hover:text-text transition-colors cursor-pointer bg-transparent border-none"
        @click="uiStore.openModal()"
      >
        <Plus :size="16" />
        Adicionar
      </button>
      <button
        class="flex items-center gap-1.5 bg-accent text-bg border-none
               px-4 py-1.5 rounded-md text-xs font-semibold cursor-pointer
               transition-opacity duration-200 hover:opacity-85"
      >
        <User :size="14" />
        Entrar
      </button>
    </div>

    <!-- Mobile menu toggle -->
    <button
      class="sm:hidden flex items-center justify-center w-9 h-9 rounded-md
             text-text hover:bg-surface2 transition-colors cursor-pointer"
      @click="mobileMenuOpen = !mobileMenuOpen"
    >
      <X v-if="mobileMenuOpen" :size="20" />
      <Menu v-else :size="20" />
    </button>
  </nav>

  <!-- Mobile drawer -->
  <Transition name="drawer">
    <div
      v-if="mobileMenuOpen"
      class="sm:hidden fixed top-[60px] inset-x-0 z-40 bg-bg/95 backdrop-blur-md
             border-b border-border px-6 py-5 flex flex-col gap-5"
    >
      <div class="flex flex-col gap-4 text-sm font-medium">
        <RouterLink
          to="/"
          class="no-underline transition-colors duration-200"
          :class="$route.name === 'home' ? 'text-text' : 'text-muted'"
          @click="closeMenu"
        >
          Início
        </RouterLink>
        <RouterLink
          to="/descobrir"
          class="no-underline transition-colors duration-200"
          :class="$route.name === 'discover' ? 'text-text' : 'text-muted'"
          @click="closeMenu"
        >
          Descobrir
        </RouterLink>
        <RouterLink
          to="/clipes"
          class="no-underline transition-colors duration-200"
          :class="$route.name === 'shorts' ? 'text-text' : 'text-muted'"
          @click="closeMenu"
        >
          Clipes
        </RouterLink>
        <RouterLink
          to="/comunidade"
          class="no-underline transition-colors duration-200"
          :class="$route.name === 'community' ? 'text-text' : 'text-muted'"
          @click="closeMenu"
        >
          Comunidade
        </RouterLink>
      </div>
      <div class="flex gap-3 pt-2 border-t border-border">
        <button
          class="flex-1 flex items-center justify-center gap-1.5 border border-border bg-transparent
                 text-text px-4 py-2 rounded-md text-xs cursor-pointer hover:border-accent transition-colors"
          @click="uiStore.openModal(); closeMenu()"
        >
          <Plus :size="14" />
          Adicionar
        </button>
        <button
          class="flex-1 flex items-center justify-center gap-1.5 bg-accent text-bg border-none
                 px-4 py-2 rounded-md text-xs font-semibold cursor-pointer hover:opacity-85 transition-opacity"
        >
          <User :size="14" />
          Entrar
        </button>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.drawer-enter-active,
.drawer-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.drawer-enter-from,
.drawer-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
