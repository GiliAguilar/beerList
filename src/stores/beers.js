import {ref, computed} from 'vue';
import { defineStore } from 'pinia';
import getBeers from '@/api/getBeers';

export const useBeersStore = defineStore('beers', () => {
    const beers = ref([]);
    const page = ref(1);
    const limit = ref(10);
    const hasMore = ref(false);
    const isLoading = ref(false);

    const FETCH_BEERS =  async () => beers.value = await getBeers(page.value, limit.value);
    const FETCH_MORE_BEERS =  async () => {
        isLoading.value = true;
        const response =  await getBeers(page.value, limit.value);
        hasMore.value = Object.keys(response).length === limit.value;
        isLoading.value = false;
        return response;
    };

    const FILTERED_BEERS = computed(()=>{
        return beers.value
    });

    const MORE_BEERS = async () => {
        page.value++;
        const moreBeers = await FETCH_MORE_BEERS();
        beers.value = [...beers.value, ...moreBeers];
    };

    return {
        beers,
        // page,
        // limit,
        hasMore,
        isLoading, 
        FETCH_BEERS, 
        FILTERED_BEERS,
        MORE_BEERS
    };
});