<template>
  <div id="app" class="h-screen bg-black/90">
    <nav class="p-7 flex justify-end gap-5 text-white text-opacity-80">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script setup>
import { useCommonStore } from '@/stores/index'
import { onServerPrefetch } from 'vue'

const commonStore = useCommonStore()

onServerPrefetch(async () => {
  commonStore.setRenderType(2)
}) 
</script>