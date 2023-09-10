<template>
  <div class="bg-gradient-to-r from-yellow-50 to-yellow-300">
    <main-nav/>
    <router-view />
  </div>
</template>

<script setup>
import MainNav from '@/components/navigation/MainNav.vue';
</script>