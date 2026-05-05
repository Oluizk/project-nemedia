<script setup>
import { useCatalogStore } from '../stores/catalog.js'
import { useUiStore } from '../stores/ui.js'

const catalogStore = useCatalogStore()
const uiStore = useUiStore()

function getMedia(mediaId) {
  return catalogStore.catalog.find((i) => i.id === mediaId)
}
</script>

<template>
  <div class="pt-[60px] min-h-screen">
    <div class="max-w-[800px] mx-auto px-8 py-12">
      <h1 class="font-serif text-[1.7rem] mb-2">
        Comunidade <span class="text-accent">ativa</span>
      </h1>
      <p class="text-muted text-sm mb-10">
        Veja o que os membros estão descobrindo e compartilhando agora.
      </p>

      <div class="flex flex-col">
        <div
          v-for="activity in catalogStore.activities"
          :key="activity.id"
          class="flex items-start gap-4 py-4 border-b border-border/50"
        >
          <!-- Avatar -->
          <div
            class="w-9 h-9 rounded-full bg-surface2 flex items-center justify-center text-xs
                   font-semibold text-muted flex-shrink-0"
          >
            {{ activity.user.charAt(0).toUpperCase() }}
          </div>

          <!-- Content -->
          <div class="flex-1 min-w-0">
            <p class="text-[0.82rem] mb-2">
              <strong class="text-text font-semibold">{{ activity.user }}</strong>
              <span class="text-muted"> {{ activity.action }}</span>
            </p>

            <!-- Media mini card -->
            <div
              v-if="getMedia(activity.mediaId)"
              class="flex items-center gap-2 cursor-pointer"
              @click="uiStore.openDetail(activity.mediaId)"
            >
              <div
                class="w-[30px] h-[42px] rounded-md bg-surface2 flex items-center justify-center
                       text-base flex-shrink-0"
              >
                {{ getMedia(activity.mediaId).emoji }}
              </div>
              <div>
                <div class="text-[0.8rem] font-semibold">
                  {{ getMedia(activity.mediaId).title }}
                </div>
                <div class="text-[0.7rem] text-muted">
                  {{ getMedia(activity.mediaId).meta }}
                </div>
              </div>
            </div>
          </div>

          <!-- Timestamp -->
          <div class="text-xs text-muted flex-shrink-0">{{ activity.time }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
