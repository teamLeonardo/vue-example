
<script setup lang="ts">
import { RouterLink } from 'vue-router';
import BtnMiniCart from '../components/BtnMiniCart.vue';
import ListMenu from '../components/ListMenu.vue';
import { PATH } from '@/router/path.const';
</script>
<template>
    <div class="navbar bg-base-100">
        <div class="flex-1">
            <RouterLink :to="PATH.HOME" class="btn btn-ghost text-xl">Eccommerce</RouterLink>
        </div>
        <div class="flex-none">
            <ListMenu></ListMenu>
            <BtnMiniCart />
        </div>
    </div>

    <slot></slot>

   
</template>

  