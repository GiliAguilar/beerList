<template>
    <section class="flex px-10 py-5">
        <div class="grid grid-cols-4 gap-10 max-w-3xl h-52">
            <div class="col-span-1 col-start-1 w-[10rem]">
                <span class="bg-yellow-100">
                    <beer-img :beerImgUrl="beer.image_url" viewSize="list"/>
                </span>
            </div>
            <div class="col-span-3 col-start-2 max-w-lg">
                <ul class="flex-col px-2 py-2 text-center">
                    <li>
                        <h1 class="text-3xl font-extrabold pb-2">
                            {{ beer.name }}
                        </h1>
                    </li>
                    <li class="font-bold">{{ beer.tagline }}</li>
                    <li>First brewed: {{ beer.first_brewed }}</li>
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