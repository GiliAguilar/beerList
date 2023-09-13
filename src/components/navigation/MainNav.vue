<template>
    <header class="fixed w-full text-sm h-20 bg-yellow-200 border-solid border-y-2 border-yellow-600">
        <div class="flex flex-row h-full w-full justify-center">
            <img :src="beerBg" class="h-14 pt-4"/>
            <div class="h-full text-center pt-3">
               <router-link :to="{ name: 'home'}" class="text-5xl font-black bg-gradient-to-r from-yellow-700 to-yellow-600 bg-clip-text text-transparent">Beer bible!</router-link> 
            </div>
        </div>
    </header>
</template>

<script setup>
//por alguna razón, en component about la url se cambia a about/src/assets/beerBg.svg causando error, coloqué "../" para corregirlo y funcionó de momento, no descarto que pueda haber bugs.
const beerBg = '../src/assets/beerBg.svg';
</script>