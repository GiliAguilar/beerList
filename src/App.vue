<template>
  <main-nav/>
  <router-view />
</template>

<script setup>
import MainNav from '@/components/navigation/MainNav.vue';
</script>

<style>
.spinner {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 5px solid rgb(189, 178, 70);
  border-top-color: white;
  position: absolute;
  bottom: 0;
  left: calc(50% - 20px);
  animation: spinner-animation 1.2s linear infinite;
}
</style>