<script setup>
import { RouterLink, useRouter } from 'vue-router'
import { Plus, User } from 'lucide-vue-next'
import { useUiStore } from '../stores/ui.js'

const router = useRouter()
const uiStore = useUiStore()
</script>

<template>
  <nav class="fixed top-0 inset-x-0 z-50 h-[60px] flex items-center justify-between px-8
              bg-bg/85 backdrop-blur-md border-b border-border">
    <!-- Logo -->
    <button
      class="font-serif text-accent text-xl tracking-wide cursor-pointer bg-transparent border-none"
      @click="router.push('/')"
    >
      Media<span class="text-text">Club</span>
    </button>

    <!-- Links -->
    <div class="flex gap-8 text-sm font-medium">
      <RouterLink
        to="/"
        class="no-underline transition-colors duration-200"
        :class="$route.name === 'home' ? 'text-text' : 'text-muted hover:text-text'"
      >
        Início
      </RouterLink>
      <RouterLink
        to="/catalogo"
        class="no-underline transition-colors duration-200"
        :class="$route.name === 'catalog' ? 'text-text' : 'text-muted hover:text-text'"
      >
        Catálogo
      </RouterLink>
      <RouterLink
        to="/clipes"
        class="no-underline transition-colors duration-200"
        :class="$route.name === 'shorts' ? 'text-text' : 'text-muted hover:text-text'"
      >
        Clipes ▶
      </RouterLink>
      <RouterLink
        to="/comunidade"
        class="no-underline transition-colors duration-200"
        :class="$route.name === 'community' ? 'text-text' : 'text-muted hover:text-text'"
      >
        Comunidade
      </RouterLink>
    </div>

    <!-- Right actions -->
    <div class="flex items-center gap-3">
      <button
        class="flex items-center gap-1.5 border border-border bg-transparent text-text
               px-4 py-1.5 rounded-md text-xs cursor-pointer transition-all duration-200
               hover:border-accent hover:bg-accent/7"
        @click="uiStore.openModal()"
      >
        <Plus :size="14" />
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
  </nav>
</template>
