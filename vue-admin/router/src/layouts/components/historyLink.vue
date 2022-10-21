<template>
    <div>
     <div class="m-3 ml-8  grid grid-flow-col gap-3 justify-start">
        <a href="" v-for="(route,index) of histortRoute.historyRoutes"  :key="index" class="bg-white rounded-md py-2 px-3 text-sm text-gray-600">
            <router-link :to="{name:route.route}">
            {{route.title}}
            <i class="fa fa-remove hover:text-red-700" @click="removeHistoryRoute(route)"></i>
            <!-- @click="removeHistoryRoute(route)" -->
        </router-link>
        </a>
     </div>
    </div>
</template>

<script setup lang="ts">
import { IMenu } from '#/menu';
import menuStore from '@/store/menuStore';

const histortRoute=menuStore()
const removeHistoryRoute=(route:IMenu)=>{
    histortRoute.removeHistoryRoute(route)
}
</script>

<style lang="scss" scoped>

</style>