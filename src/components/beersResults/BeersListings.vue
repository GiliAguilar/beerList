<template>
    <main class="flex h-screen justify-center">
        <div v-bind="containerProps" class="heightScreen p-2 w-full mt-20">
            <div v-bind="wrapperProps" class="flex flex-col max-w-3xl mx-auto">
                <div v-for="{ index, data } in list" :key="index" class="flex h-auto my-2 bg-orange-300 rounded-[50px] border-slate-400">
                    <h2 class="text-xl font-black py-[104px] pl-8 ">{{ index + 1}}</h2>
                    <beer-details :beer="data"/>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import { useBeersStore } from '@/stores/beers';
import { useVirtualList, useInfiniteScroll } from '@vueuse/core';
import BeerDetails from '@/components/beersResults/BeerDetails.vue';

const beersStore = useBeersStore();
 
const { list, containerProps, wrapperProps } = useVirtualList(beersStore.beers, {
    itemHeight: 208
});
useInfiniteScroll(containerProps.ref, async () => {
    await beersStore.MORE_BEERS();
}, { distance: 10 });
</script>

<style>
.heightScreen {
    height: calc(100vh - 80px);
}
</style>