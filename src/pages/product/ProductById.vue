
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { platziAxios } from '../../service/axiosConf';
import { useRoute } from 'vue-router';
import img from "../../assets/img.png";

const data = ref<any | null>(null);

const route = useRoute();

async function fetchData() {
    try {
        const response = await platziAxios.get("/products/" + route.params.id);
        data.value = response.data
    } catch (error) {
        console.error(error);
    }
}

onMounted(() => {
    fetchData()
});


function replaceByDefault(e: any) {
    e.target.src = img
}


</script>
<template>
    <div>
        <div v-if="data && Object.keys(data).length > 0" class="mx-auto max-w-[1920px] px-4 md:px-8 2xl:px-16">
            <div class="block lg:grid grid-cols-9 gap-x-10 xl:gap-x-14 pt-7 pb-10 lg:pb-14 2xl:pb-20 items-start">
                <div class="col-span-5 grid grid-cols-2 gap-2.5">
                    <div v-for="(img, index) in data.images" :key="index"
                        class="col-span-1 transition duration-150 ease-in hover:opacity-90">
                        <img :src="img" @error="replaceByDefault" :alt="`Maniac Red Boys--${index + 1}`"
                            class="object-cover w-full">
                    </div>
                </div>
                <div class="col-span-4 pt-8 lg:pt-0">
                    <div class="pb-7 mb-7 border-b border-gray-300">
                        <h2
                            class="text-heading text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-bold hover:text-black mb-3.5">
                            {{ data.title }}</h2>
                        <p class="text-body text-sm lg:text-base leading-6 lg:leading-8">
                            {{ data.description }}
                        </p>
                        <div class="flex items-center mt-5">
                            <div
                                class="text-heading font-bold text-base md:text-xl lg:text-2xl 2xl:text-4xl ltr:pr-2 rtl:pl-2 ltr:md:pr-0 rtl:md:pl-0 ltr:lg:pr-2 rtl:lg:pl-2 ltr:2xl:pr-0 rtl:2xl:pl-0">
                                ${{ data.price }}
                            </div>
                            <span
                                class="line-through font-segoe text-gray-400 text-sm md:text-base lg:text-lg xl:text-xl ltr:pl-2 rtl:pr-2">
                                ${{ data.price + 100 }}
                            </span>
                        </div>
                    </div>
                   
                    <div
                        class="flex items-center gap-x-4 ltr:md:pr-32 rtl:md:pl-32 ltr:lg:pr-12 rtl:lg:pl-12 ltr:2xl:pr-32 rtl:2xl:pl-32 ltr:3xl:pr-48 rtl:3xl:pl-48 border-b border-gray-300 py-8">
                        <div
                            class="group flex items-center justify-between rounded-md overflow-hidden flex-shrink-0 border h-11 md:h-12 border-gray-300">
                            <button
                                class="flex items-center justify-center flex-shrink-0 h-full transition ease-in-out duration-300 focus:outline-none w-10 md:w-12 text-heading border-e border-gray-300 hover:text-white hover:bg-heading"
                                disabled><svg xmlns="http://www.w3.org/2000/svg" width="12px" height="2px"
                                    viewBox="0 0 12 1.5">
                                    <rect data-name="Rectangle 970" width="12px" height="2px" fill="currentColor"></rect>
                                </svg></button><span
                                class="font-semibold flex items-center justify-center h-full  transition-colors duration-250 ease-in-out cursor-default flex-shrink-0 text-base text-heading w-12  md:w-20 xl:w-24">1</span><button
                                class="flex items-center justify-center h-full flex-shrink-0 transition ease-in-out duration-300 focus:outline-none w-10 md:w-12 text-heading border-s border-gray-300 hover:text-white hover:bg-heading"><svg
                                    data-name="plus (2)" xmlns="http://www.w3.org/2000/svg" width="12px" height="12px"
                                    viewBox="0 0 12 12">
                                    <g data-name="Group 5367">
                                        <path data-name="Path 17138"
                                            d="M6.749,5.251V0h-1.5V5.251H0v1.5H5.251V12h1.5V6.749H12v-1.5Z"
                                            fill="currentColor"></path>
                                    </g>
                                </svg></button>
                        </div><button data-variant="slim"
                            class="text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none rounded-md  h-11 md:h-12 px-5 bg-heading text-white py-2 transform-none normal-case hover:text-white hover:bg-gray-600 hover:shadow-cart cursor-not-allowed hover:cursor-not-allowed w-full md:w-6/12 xl:w-full bg-gray-400 hover:bg-gray-400"
                            disabled><span class="py-2 3xl:px-8">Add to cart</span></button>
                    </div>
                   
                </div>
            </div>
            
        </div>
    </div>
</template>    

