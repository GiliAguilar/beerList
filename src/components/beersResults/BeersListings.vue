<template>
    <main class="flex-auto">
        <ol>
            <beer-details v-for="beer in beersStore.beers" :key="beer.id" :beer="beer" class="max-w-3xl"/>
        </ol>
    </main>
    <div class="app__container">
        <div class="spinner" v-if="beersStore.isLoading"></div>
        <a href="" class="click__button app__more" v-if="beersStore.hasMore && !(beersStore.isLoading)" @click.prevent="beersStore.MORE_BEERS">See more</a>
    </div>
</template>

<script setup>
import { useBeersStore } from '@/stores/beers';
import {onBeforeMount, onMounted, onUnmounted, computed} from 'vue';
import BeerDetails from '@/components/beersResults/BeerDetails.vue';

const beersStore = useBeersStore();

// const FILTERED_BEERS = computed(()=>beersStore.FILTERED_BEERS);
// const displayBeers = computed(()=> FILTERED_BEERS.value);

function scrolling({target}) {
  const { scrollingElement } = target;
  console.log(scrollingElement);

    const button = document.querySelector(".click__button");
    button?.click();
}

onBeforeMount(()=>{
    beersStore.FETCH_BEERS();
});
onMounted(() => {
    window.addEventListener('scroll', scrolling);
})
onUnmounted(() => {
    window.removeEventListener('scroll', scrolling);
})

</script>

<style scoped>
.app__container {
    min-height: 25px;
    margin: 15px auto;
    text-align: center;
    position: relative;
}


.app__more {
    font-size: 1.2rem;
    text-decoration: none;
    cursor: pointer;
}
.app__more:hover {
    text-decoration: underline;
}
.app__more,
.app__more:active {
    color: rgb(175, 162, 35)
}
</style>