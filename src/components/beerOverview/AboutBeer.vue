<template>
    <div class="flex h-full bg-gradient-to-r from-yellow-100 to-yellow-200">
        <div class="pt-36">
            <h2 class="flex justify-center text-4xl">Title {{ data.name }}</h2>
            <div class="grid grid-cols-7 gap-5 w-auto">
                <div class="col-span-1 col-start-2">
                    <img v-if="data.image_url" :src="data.image_url" class="drop-shadow-xl max-h-[500px]"/>
                    <img v-else src='../../../src/assets/logo.svg' class="drop-shadow-xl"/>
                </div>
                <div class="col-span-2 col-start-3 h-auto px-5 py-5">
                    <ol>
                        <li class="text-2xl pb-2">
                            {{ data.tagline }}
                        </li>
                        <li class="text-xl pb-1">
                            First brewed: {{ data.first_brewed }}
                        </li>
                        <li class="text-xl pb-1">
                            {{ data.description }}
                        </li>
                        <li class="text-xl pb-1">
                            ABV: {{ data.abv }}
                        </li>
                        <li class="text-xl">
                            SRM: {{ data.srm }}
                        </li>
                    </ol>
                </div>
                <div class="col-span-2 col-start-5 h-auto px-5 py-5">
                    <ol>
                        <li class="text-2xl pb-2">
                            Ingredients
                        </li>
                        <li>
                            <div>
                                <ol>
                                    <li class="text-xl pb-1">
                                        Malt:
                                    </li>
                                    <li v-for="i in data.ingredients.malt" :key="i" class="text-base pl-2">
                                            - {{ i.name }}: {{ i.amount.value }} {{ i.amount.unit }}
                                    </li>
                                </ol>
                            </div>
                        </li>
                        <li>
                            <div>
                                <ol>
                                    <li class="text-xl pb-1">
                                        Hops:
                                    </li>
                                    <li v-for="i in data.ingredients.hops" :key="i" class="text-base pl-2">
                                        - {{ i.name }}: {{ i.amount.value }} {{ i.amount.unit }}
                                    </li>
                                </ol>
                            </div>
                        </li>
                        <li>
                            <div class="text-xl">Yeast:</div>
                            <div class="text-base pl-2">- {{ data.ingredients.yeast }}</div>
                        </li>
                    </ol>
                </div>
            </div>
            <div class="px-32 md:bg-slate-500">
                <div class="text-m font-bold mt-14">
                    Brewers tips: {{ data.brewers_tips }}
                </div>
                <div class="text-m font-light">
                    Contributed by: {{ data.contributed_by }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {onBeforeMount, computed} from 'vue';
import {useBeersStore} from '@/stores/beers';
import { useRoute } from 'vue-router';

const route = useRoute();

const beersStore = useBeersStore();
const data = computed(() => beersStore.BEER);
const beerId = computed(() => route.params.id);

onBeforeMount(async () => {
    await beersStore.FETCH_BEER(beerId.value);
});
</script>