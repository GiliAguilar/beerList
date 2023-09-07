<template>
    <header class="w-full text-sm h-12">
        <div class="fixed h-12 w-full bg-yellow-100">
            <div class="h-full text-center ">
               <router-link :to="{ name: 'home'}" class="text-3xl font-black bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent">Beer bible!</router-link> 
            </div>
        </div>
    </header>
</template>