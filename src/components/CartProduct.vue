<script setup lang="ts">
import { useRouter } from "vue-router";
import img from "../assets/img.png"
import { useCartStore } from "../stores/cart.store"
import { PATH } from "@/router/path.const";
const props = defineProps<{ value: any }>()

// store cart
const { setData } = useCartStore()

// router
const router = useRouter()

function replaceByDefault(e: any) {
    e.target.src = img
}

function addCart(e: any) {
    e.preventDefault()

    setData({
        id: props.value.id,
        title: props.value.title,
        price: props.value.price,
        description: props.value.description,
        images: [...props.value.images],
        category: JSON.parse(JSON.stringify(props.value.category)),
    })
}

function moveToDetaill(e: any) {
    e.preventDefault()
    e.stoppropagation()

    router.push(PATH.PRODUCT + `/${props.value.id}`)

}

</script>

<template>
    <div class="card w-[310px] bg-base-100 cursor-pointer shadow-xl" @click="moveToDetaill">
        <figure class="overflow-auto">
            <img :src="value.images[0]" :alt="value.title" class="w-full" @error="replaceByDefault" />
        </figure>
        <div class="card-body">
            <h2 class="card-title"> {{ value.title }}</h2>
            <p>{{ value.description }}</p>
            <div class="card-actions justify-end">
                <button @click="addCart" class="btn hover:scale-110 btn-primary">Comprar</button>
            </div>
        </div>
    </div>
</template>

