<template>
  <div class="bg-gradient-to-r from-yellow-100 to-yellow-200">
    <main-nav/>
    <router-view />
  </div>
</template>

<script setup>
import MainNav from '@/components/navigation/MainNav.vue';
</script>