<script setup lang="ts">
import img from "../assets/img.png"
import { PATH } from "../router/path.const";
defineProps<{ value: any }>()

function replaceByDefault(e: any) {
    e.target.src = img
}

// function addCart() {
//     setData({
//         id: props.value.id,
//         title: props.value.title,
//         price: props.value.price,
//         description: props.value.description,
//         images: [...props.value.images],
//         category: JSON.parse(JSON.stringify(props.value.category)),
//     })
// }

</script>
<template>
    <div className="group 
        relative 
        flex 
        h-auto 
        w-full 
        items-center 
        justify-start 
        border-b 
        border-gray-100 
        py-4 
        gap-2
        last:border-b-0 
        md:py-7 
        opacity-100
        " title="Maniac Red Boys">
        <div className="relative 
            flex 
            h-24 w-24 
            flex-shrink-0 
            cursor-pointer 
            overflow-hidden 
            rounded-md 
            bg-gray-200 
            ltr:mr-4 
            rtl:ml-4 
            md:h-28 
            md:w-28">
            <span className="box-border 
                inline-block 
                overflow-hidden 
                [width:initial] 
                [height:initial] 
                bg-none 
                opacity-100 
                border-[0px] 
                m-0 p-0 
                relative 
                max-w-full">
                <span className="box-border 
                    block [width:initial] 
                    [height:initial] bg-none opacity-100 border-[0px] m-0 p-0 max-w-full">
                    <img alt='' @error="replaceByDefault" :src="value.images[0]" width={0} height={0} sizes="100vw"
                        className="block max-w-full [width:initial] [height:initial] bg-none opacity-100 border-[0px] m-0 p-0" />
                </span>

            </span>
            <div className="absolute 
                top-0 
                flex 
                h-full 
                w-full 
                items-center 
                justify-center 
                bg-black 
                transition duration-200 
                ease-in-out 
                ltr:left-0 
                rtl:right-0 
                bg-opacity-0 
                group-hover:bg-opacity-30
                " role="button">
                <span
                    className="relative transform text-2xl text-white transition duration-300 ease-in-out md:scale-0 md:opacity-0 md:group-hover:scale-100 md:group-hover:opacity-100 h-[20px] w-[20px]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24">
                        <path
                            d="M5.755,20.283,4,8H20L18.245,20.283A2,2,0,0,1,16.265,22H7.735A2,2,0,0,1,5.755,20.283ZM21,4H16V3a1,1,0,0,0-1-1H9A1,1,0,0,0,8,3V4H3A1,1,0,0,0,3,6H21a1,1,0,0,0,0-2Z" />
                    </svg>
                </span>
               
            </div>
        </div>
        <div className="flex w-full flex-col overflow-hidden">
            <RouterLink className="text-heading -mt-1 mb-1.5 truncate text-sm" :to="PATH.PRODUCT + '/' + value.id">
                {{ value.title }}
            </RouterLink>
            <span className="mb-2.5 text-sm text-gray-400">
                Precio unitario : &nbsp; ${{ value.price }}
                <!-- {prod.Price} -->
            </span>
            <div className="flex items-end justify-between">
                <div
                    className="shadow-navigation bg-gray-950  group flex h-8 flex-shrink-0 items-center justify-between overflow-hidden rounded-md md:h-9">
                    <button className="bg-gray-950 
                        flex h-full w-8 
                        flex-shrink-0 
                        items-center 
                        justify-center 
                        text-white 
                        transition 
                        duration-300 
                        ease-in-out 
                        hover:bg-gray-600 
                        focus:outline-none 
                        md:w-9">
                        -
                        <!-- <FontAwesomeIcon icon={faMinus} width={10} height={3} /> -->
                    </button>
                    <span className="duration-250 
                        flex h-full w-8 
                        flex-shrink-0 
                        cursor-default 
                        items-center 
                        justify-center 
                        text-sm 
                        font-semibold 
                        text-white 
                        transition-colors 
                        ease-in-out 
                        md:w-10">
                        {{ value.cantidad }}
                        <!-- {prod.quantity} -->
                    </span>
                    <button className="bg-gray-950 
                        flex h-full w-8 
                        flex-shrink-0 
                        items-center 
                        justify-center
                        text-white 
                        transition 
                        duration-300 
                        ease-in-out 
                        hover:bg-gray-600 
                        focus:outline-none 
                        md:w-9
                        ">
                        +
                        <!-- <FontAwesomeIcon icon={faPlus} width={10} height={3} /> -->
                    </button>
                </div>
                <span className="text-heading text-sm font-semibold leading-5 md:text-base mr-4">
                    ${{ value.cantidad * value.price }}
                </span>
            </div>
        </div>
    </div>
</template>