import {ref, computed} from 'vue';
import { defineStore } from 'pinia';
import {getBeer, getBeers} from '@/api/getBeers';

export const useBeersStore = defineStore('beers', () => {
    const beers = ref([]);
    const beer = ref();
    const page = ref(0);
    const searchTerm = ref('');

    const FETCH_BEER = async (id) => {
        const response = await getBeer(id);
        beer.value = response[0];
    };
    const MORE_BEERS = async () => {
        page.value++;
        const moreBeers = await getBeers(page.value);
        beers.value.push( ...moreBeers);
    };
    const UPDATE_SEARCH_TERM = (input) => {
        searchTerm.value = input
    };

    const INCLUDE_BEER_BY_NAME = (i) => {
        const response = i.name.toLocaleLowerCase().includes(searchTerm.value.toLocaleLowerCase());
        console.log(i.name, response);
        return response;
    };

    const FILTERED_BEERS = async () => {
        page.value++;
        const moreBeers = await getBeers(page.value);
        const result = moreBeers
        .filter((beer) => INCLUDE_BEER_BY_NAME(beer));
        console.log(result);
        beers.value.push(...result);
    };

    return {
        beer,
        beers,
        page,
        searchTerm,
        FETCH_BEER,
        MORE_BEERS,
        UPDATE_SEARCH_TERM,
        FILTERED_BEERS,
    };
});