<template>
    <main class="flex-auto">
        <ol>
            <beer-details v-for="beer in displayBeers" :key="beer.id" :beer="beer" class="max-w-3xl"/>
        </ol>
    </main>
</template>

<script setup>
import { useBeersStore } from '@/stores/beers';
import {onMounted, computed} from 'vue';
import BeerDetails from '@/components/beersResults/BeerDetails.vue';

const beersStore = useBeersStore();
const FILTERED_BEERS = computed(()=>beersStore.FILTERED_BEERS);

const displayBeers = computed(()=> FILTERED_BEERS.value);

onMounted(()=>{
    beersStore.FETCH_BEERS();
});

</script>