<template>
    <section class="pb-5 pt-5">
        <div class="grid grid-cols-2">
            <div class="col-span-1 col-start-1">
                <img :src="beer.img" class="h-auto w-40 object-fill"/>
            </div>
            <div class="col-span-1 col-start-2">
                <ul>
                    <li>
                        <h1 class="text-3xl">
                            {{ beer.desc1 }}
                        </h1>
                    </li>
                    <li>{{ beer.desc2 }}</li>
                    <li>{{ beer.desc3 }}</li>
                    <li>{{ beer.desc4 }}</li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script setup>
const beer = {
    id: 1,
    desc1: 'desc1',
    desc2: 'desc2',
    desc3: 'desc3',
    desc4: 'desc4',
    img: 'src/assets/logo.svg'
}
</script>