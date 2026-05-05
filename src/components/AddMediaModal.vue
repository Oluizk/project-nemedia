<script setup>
import { reactive } from 'vue'
import { X } from 'lucide-vue-next'
import { useUiStore } from '../stores/ui.js'
import { useCatalogStore } from '../stores/catalog.js'

const uiStore = useUiStore()
const catalogStore = useCatalogStore()

const form = reactive({
  type: 'filme',
  rating: 5,
  title: '',
  meta: '',
  description: '',
  clipUrl: '',
})

const typeOptions = [
  { value: 'filme',   label: 'Filme' },
  { value: 'série',   label: 'Série' },
  { value: 'livro',   label: 'Livro' },
  { value: 'podcast', label: 'Podcast' },
  { value: 'vídeo',   label: 'Vídeo' },
]

const emojiMap = {
  filme:   '🎬',
  série:   '📺',
  livro:   '📚',
  podcast: '🎙️',
  vídeo:   '🎥',
}

function handleSubmit() {
  if (!form.title.trim()) return

  catalogStore.addMedia({
    title:       form.title.trim(),
    meta:        form.meta.trim(),
    type:        form.type,
    rating:      Number(form.rating),
    emoji:       emojiMap[form.type] || '🎬',
    hasClip:     !!form.clipUrl.trim(),
    description: form.description.trim(),
  })

  uiStore.showToast(`"${form.title}" adicionado ao catálogo!`)
  uiStore.closeModal()

  // Reset form
  Object.assign(form, {
    type: 'filme',
    rating: 5,
    title: '',
    meta: '',
    description: '',
    clipUrl: '',
  })
}
</script>

<template>
  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="uiStore.isModalOpen"
        class="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 flex items-center justify-center px-4"
        @click.self="uiStore.closeModal()"
      >
        <Transition name="scale">
          <div
            v-if="uiStore.isModalOpen"
            class="bg-surface rounded-2xl p-6 w-full max-w-[460px]
                   shadow-2xl relative"
          >
            <!-- Close button -->
            <button
              class="absolute top-4 right-4 w-8 h-8 flex items-center justify-center
                     text-muted hover:text-text transition-colors cursor-pointer bg-transparent border-none"
              @click="uiStore.closeModal()"
            >
              <X :size="16" />
            </button>

            <h2 class="font-serif text-[1.4rem] mb-1">Adicionar título</h2>
            <p class="text-muted text-xs mb-6">Compartilhe uma obra com a comunidade</p>

            <form @submit.prevent="handleSubmit">
              <!-- Type & Rating row -->
              <div class="grid grid-cols-2 gap-3 mb-4">
                <div>
                  <label class="block text-muted text-[0.78rem] font-medium mb-1.5">Tipo</label>
                  <select
                    v-model="form.type"
                    class="w-full bg-surface2 rounded-lg px-3 py-2.5
                           text-text text-[0.85rem] outline-none focus:ring-1 focus:ring-accent
                           transition-all"
                  >
                    <option
                      v-for="opt in typeOptions"
                      :key="opt.value"
                      :value="opt.value"
                      class="bg-surface"
                    >
                      {{ opt.label }}
                    </option>
                  </select>
                </div>
                <div>
                  <label class="block text-muted text-[0.78rem] font-medium mb-1.5">
                    Avaliação (1–5)
                  </label>
                  <input
                    v-model.number="form.rating"
                    type="number"
                    min="1"
                    max="5"
                    class="w-full bg-surface2 rounded-lg px-3 py-2.5
                           text-text text-[0.85rem] outline-none focus:ring-1 focus:ring-accent
                           transition-all"
                  />
                </div>
              </div>

              <!-- Title -->
              <div class="mb-4">
                <label class="block text-muted text-[0.78rem] font-medium mb-1.5">
                  Título <span class="text-danger">*</span>
                </label>
                <input
                  v-model="form.title"
                  type="text"
                  placeholder="Ex: Inception"
                  class="w-full bg-surface2 rounded-lg px-3 py-2.5
                         text-text text-[0.85rem] outline-none focus:ring-1 focus:ring-accent
                         transition-all placeholder:text-muted/50"
                  required
                />
              </div>

              <!-- Meta -->
              <div class="mb-4">
                <label class="block text-muted text-[0.78rem] font-medium mb-1.5">
                  Criador · Ano
                </label>
                <input
                  v-model="form.meta"
                  type="text"
                  placeholder="Ex: Christopher Nolan · 2010"
                  class="w-full bg-surface2 rounded-lg px-3 py-2.5
                         text-text text-[0.85rem] outline-none focus:ring-1 focus:ring-accent
                         transition-all placeholder:text-muted/50"
                />
              </div>

              <!-- Description -->
              <div class="mb-4">
                <label class="block text-muted text-[0.78rem] font-medium mb-1.5">Descrição</label>
                <textarea
                  v-model="form.description"
                  rows="3"
                  placeholder="Breve descrição do título..."
                  class="w-full bg-surface2 rounded-lg px-3 py-2.5
                         text-text text-[0.85rem] outline-none focus:ring-1 focus:ring-accent
                         transition-all resize-y placeholder:text-muted/50"
                />
              </div>

              <!-- Clip URL -->
              <div class="mb-6">
                <label class="block text-muted text-[0.78rem] font-medium mb-1.5">
                  URL do clipe (opcional)
                </label>
                <input
                  v-model="form.clipUrl"
                  type="url"
                  placeholder="https://..."
                  class="w-full bg-surface2 rounded-lg px-3 py-2.5
                         text-text text-[0.85rem] outline-none focus:ring-1 focus:ring-accent
                         transition-all placeholder:text-muted/50"
                />
              </div>

              <!-- Actions -->
              <div class="flex gap-3 justify-end">
                <button
                  type="button"
                  class="text-muted text-sm hover:text-text transition-colors cursor-pointer bg-transparent border-none"
                  @click="uiStore.closeModal()"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  class="bg-accent text-bg border-none px-5 py-2 rounded-lg text-xs
                         font-semibold cursor-pointer hover:opacity-85 transition-opacity"
                >
                  Adicionar
                </button>
              </div>
            </form>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.scale-enter-active,
.scale-leave-active {
  transition: transform 0.2s ease, opacity 0.2s ease;
}
.scale-enter-from,
.scale-leave-to {
  transform: scale(0.95);
  opacity: 0;
}
</style>
