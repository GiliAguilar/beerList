<template>
    <div>
        <img :src="beerImgUrl" :class="['w-auto', actionClasses]"/>
    </div>
</template>

<script setup>
import {computed} from 'vue';

const props = defineProps({
    beerImgUrl: {
        type: String,
        require: true,
    },
    viewSize: {
        type: String,
        requiere: true,
    }
});

let imgClass = 'default';
let beerImgUrl = props.beerImgUrl;
if(props.viewSize === 'list' || props.viewSize === 'overview') imgClass = props.viewSize;
if(beerImgUrl === null) beerImgUrl = 'src/assets/logo.svg';

const actionClasses = computed(()=> ({[imgClass]: true}));
</script>

<style scoped>
.default {
    height: 190px;
}

.list {
    height: 190px;
}

.overview {
    height: 350px;
}
</style>