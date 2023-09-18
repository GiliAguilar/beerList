<template>
    <main class="flex flex-col h-screen justify-center bg-gradient-to-r from-yellow-100 to-yellow-200">
        <div class="flex mt-20 justify-center border-solid border-b-2 border-yellow-500 bg-yellow-200">
            <input
            v-if="userTerm"
            v-model.lazy.trim="beerSearch"
            type="text"
            class="h-12 w-96 rounded-xl border-solid border-brand-gray-1 p-3 my-4 text-base text-center shadow-gray"
            placeholder="Do you have any Beer preference?"
            />
            <div v-else class="flex-col py-3">
                <div class="text-xl font-bold text-center">Looking for the beer: <span class="font-extrabold">{{ beersStore.searchTerm }}</span>
                </div>
                <button @click="clearTerm" class="hover:text-blue-900 hover:font-semibold">Clear search</button>
            </div>
        </div>
        <div v-bind="containerProps" class="heightScreen p-2 w-full">
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
import { computed } from 'vue';


const beersStore = useBeersStore();
const router = useRouter();

////////////// Parcial funcionality, the search and filters work just fine, the issue is, the first 10 beer stored continued displayed, i think the problem is with the function below (documentation vueuse)
const { list, containerProps, wrapperProps } = useVirtualList(beersStore.beers, {
    itemHeight: 208
});
useInfiniteScroll(containerProps.ref, async () => {
    await beersStore.FILTERED_BEERS();
    // await beersStore.MORE_BEERS();
}, { distance: 15 });


//Router
const searchForBeer = async (beerId) => {
    router.push(`/about/${beerId}`);
};
//Set term to Pinia
const beerSearch = computed({
  get() {
    return beersStore.beerSearch;
  },
  set(input) {
    beersStore.UPDATE_SEARCH_TERM(input);
  },
});
// if show search bar or not
const userTerm = computed(() => beersStore.searchTerm ? false : true);
const clearTerm = () => {
    beersStore.searchTerm = '';
}
</script>

<style>
.heightScreen {
    height: calc(100vh - 80px);
}
</style>