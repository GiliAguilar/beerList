import {ref, computed} from 'vue';
import { defineStore } from 'pinia';
import getBeers from '@/api/getBeers';

const fetchLimit = import.meta.env.VITE_APP_API_FETCH_LIMIT;

export const useBeersStore = defineStore('beers', () => {
    const beers = ref([]);
    const page = ref(0);

    const FETCH_BEERS =  async () => {
        beers.value = await getBeers(page.value)
    };
    const FETCH_MORE_BEERS =  async () => {
        const response =  await getBeers(page.value);
        return response
    };

    const FILTERED_BEERS = computed(()=>{
        return beers.value
    });

    const MORE_BEERS = async () => {
        page.value++;
        const moreBeers = await FETCH_MORE_BEERS();
        beers.value.push( ...moreBeers);
    };

    return {
        beers,
        page,
        FETCH_BEERS, 
        FILTERED_BEERS,
        MORE_BEERS
    };
});