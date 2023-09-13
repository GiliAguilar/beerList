import {ref, computed} from 'vue';
import { defineStore } from 'pinia';
import {getBeer, getBeers} from '@/api/getBeers';

// const fetchLimit = import.meta.env.VITE_APP_API_FETCH_LIMIT;

export const useBeersStore = defineStore('beers', () => {
    const beers = ref([]);
    const beer = ref();
    const page = ref(0);

    const FETCH_BEER = async (id) => {
        const response = await getBeer(id);
        beer.value = response[0];
    };
    const FETCH_BEERS =  async () => {
        beers.value = await getBeers(page.value)
    };
    const FETCH_MORE_BEERS =  async () => {
        const response =  await getBeers(page.value);
        return response
    };
    const MORE_BEERS = async () => {
        page.value++;
        const moreBeers = await FETCH_MORE_BEERS();
        beers.value.push( ...moreBeers);
    };

    const BEER = computed(() => beer.value);
    const FILTERED_BEERS = computed(() => beers.value);

    return {
        beer,
        beers,
        page,
        FETCH_BEER,
        FETCH_BEERS, 
        MORE_BEERS,
        BEER,
        FILTERED_BEERS,
    };
});