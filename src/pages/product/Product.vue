
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { platziAxios } from '../../service/axiosConf';
import InfiniteLoading from "v3-infinite-loading";
import "v3-infinite-loading/lib/style.css"; //required if you're not going to override default slots
import CartProduct from '../../components/CartProduct.vue';


const data = ref<any[]>([])

const isNext = ref(0)

const limit = 12
async function fetchData($state?: any) {
    try {
        const response = await platziAxios.get("/products", { params: { offset: isNext.value, limit } });
        data.value = [...data.value, ...response.data]
        if (response.data.length < limit) $state.complete();
        else {
            $state.loaded();
        }
        isNext.value += 12;
    } catch (error) {
        $state.error()
        console.error(error);
    }
}

onMounted(() => {
    fetchData()
})


</script>
<template>
    <div>
        <h1 class="font-bold text-3xl mt-3 ml-6">productos</h1>
        <div class="max-w-full mx-2 mt-6 place-items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 gap-y-6">
            <slot v-for="value of data" :key="value.id">
                <CartProduct :value="value" />
            </slot>
        </div>
        <InfiniteLoading @infinite="fetchData" />
    </div>
</template>    

