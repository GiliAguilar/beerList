<template>
    <section class="pb-5 pt-5 px-10">
        <div class="grid grid-cols-2 max-w-4xl">
            <div class="col-span-1 col-start-1 bg-yellow-300 max-w-xs">
                <ul>
                    <li class="bg-yellow-100 ">
                        <beer-img :beerImgUrl="beer.image_url" viewSize="list"/>
                    </li>
                </ul>
            </div>
            <div class="col-span-1 col-start-2 max-w-lg bg-yellow-300">
                <ul>
                    <li>
                        <h1 class="text-3xl">
                            {{ beer.name }}
                        </h1>
                    </li>
                    <li>{{ beer.tagline }}</li>
                    <li>First brewed: {{ beer.first_brewed }}</li>
                    <li>Brewers tips: {{ beer.brewers_tips }}</li>
                    <li>Contributed by: {{ beer.contributed_by }}</li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script setup>
import BeerImg from '@/components/beersResults/BeerImg.vue';

const props = defineProps({
    beer: {
        type: Object,
        require: true,
        default: null
    }
});
</script>