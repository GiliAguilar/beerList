import {ref, computed} from 'vue';
import { defineStore } from 'pinia';
import getBeers from '@/api/getBeers';

export const useBeersStore = defineStore('beers', () => {
    const beers = ref([]);
    const FETCH_BEERS =  async () => {
        beers.value =  await getBeers();
    };

    const FILTERED_BEERS = computed(()=>{
        return beers.value
    });

    return {beers, FETCH_BEERS, FILTERED_BEERS};
});