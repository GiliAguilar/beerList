<template>
    <main class="flex h-screen justify-center">
        <div v-bind="containerProps" class="heightScreen p-2 w-full mt-20">
            <div v-bind="wrapperProps" class="flex flex-col max-w-3xl mx-auto">
                <div v-for="{ index, data } in list" 
                :key="index" 
                class="flex h-auto my-2 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-500 to-yellow-300 rounded-[50px] border-solid border-1 border-black shadow-xl"
                >
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
// import {useRouter} from 'vue-router';


const beersStore = useBeersStore();
// const router = useRouter();
// const beerId = ref();
 
const { list, containerProps, wrapperProps } = useVirtualList(beersStore.beers, {
    itemHeight: 208
});
useInfiniteScroll(containerProps.ref, async () => {
    await beersStore.MORE_BEERS();
}, { distance: 10 });


// const BeerDetails = () => {
//     router.push({
//         name: 'about',
//         query: {
//             id: beer.id
//         }
//     })
// }
</script>

<style>
.heightScreen {
    height: calc(100vh - 80px);
}
</style>