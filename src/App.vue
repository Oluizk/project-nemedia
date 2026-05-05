<script setup>
import { RouterView } from 'vue-router'
import AppNavbar from './components/AppNavbar.vue'
import DetailPanel from './components/DetailPanel.vue'
import AddMediaModal from './components/AddMediaModal.vue'
import ToastNotification from './components/ToastNotification.vue'
</script>

<template>
  <AppNavbar />
  <RouterView />
  <DetailPanel />
  <AddMediaModal />
  <ToastNotification />
</template>
