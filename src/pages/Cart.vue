
<script setup lang="ts">
import ItemCart from '../components/ItemCart.vue';
import { useCartStore } from '../stores/cart.store';

const { getData, total } = useCartStore()
</script>
<template>
    <div class="overflow-hidden">
        <div
            className='grid grid-cols-1 grid-rows-[auto,1fr,auto] h-full w-full max-w-2xl m-auto min-h-full overflow-hidden'>
            <div className='relative'>
                <span className='text-base-content font-bold w-[80%] truncate text-2xl'>
                    Carrito de compra
                </span>
            </div>
            <div className='relative h-full overflow-auto'>
                <slot v-for="value of getData" :key="value.id">
                    <ItemCart :value="value" />
                </slot>
            </div>
            <div className='relative flex justify-center pt-4'>
                <a className="flex w-full items-center justify-center rounded-md bg-black px-5 py-3 text-sm text-white transition duration-300 hover:bg-gray-600 focus:outline-none sm:text-base md:py-4"
                    href="/checkout">
                    <span className="-mt-0.5 w-full py-0.5 ltr:pr-5 rtl:pl-5">Procede con el pago</span>
                    <span className="-mt-0.5 flex flex-shrink-0 py-0.5 ltr:ml-auto rtl:mr-auto">
                        <span className="border-white py-0.5 ltr:border-l ltr:pr-5 rtl:border-r rtl:pl-5"> </span>
                        ${{ total }}
                    </span>
                </a>
            </div>
        </div>
    </div>
</template>    

