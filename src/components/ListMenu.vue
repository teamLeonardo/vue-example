<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { mapRouter } from "../router/index.router"
</script>

<template>
    <ul class="menu menu-horizontal px-1">
        <li v-for="value of mapRouter" :key="value.name">
            <RouterLink :to="value.path">
                {{ value.name }}
            </RouterLink>
        </li>
    </ul>
</template>

