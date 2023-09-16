<template>
    <main class="flex h-screen justify-center">
        <div v-bind="containerProps" class="heightScreen p-2 w-full mt-20">
            <div v-bind="wrapperProps" class="flex flex-col max-w-3xl mx-auto">
                <div v-for="{ index, data } in list" 
                :key="data" 
                class="flex h-auto my-2 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-500 to-yellow-300 rounded-[50px] border-solid border-1 border-black shadow-xl"
                @click="searchForBeer(data.id)"
                >
                    <h2 class="text-xl font-black py-[104px] pl-8 ">{{ index + 1}}</h2>
                    <!-- <router-link></router-link> -->
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
import {useRouter} from 'vue-router';
import { computed, onMounted } from 'vue';


const beersStore = useBeersStore();
const router = useRouter();
 
const { list, containerProps, wrapperProps } = useVirtualList(beersStore.beers, {
    itemHeight: 208
});
useInfiniteScroll(containerProps.ref, async () => {
    await beersStore.MORE_BEERS();
}, { distance: 10 });


const searchForBeer = async (beerId) => {
    router.push(`/about/${beerId}`);
};

</script>

<style>
.heightScreen {
    height: calc(100vh - 80px);
}
</style>