<template>
    <div class="h-screen w-screen bg-gray-700 justify-center items-center flex flex-col">
         <img src="@/assets/images/harden.webp" alt="" class="bgcImg"/>
         <div class="justify-center items-center flex my-10">
        <router-link :to="{name:'adminHome'}" class="HTbutton">后台管理</router-link>
        <router-link :to="{name:'permission'}" class="HTbutton">后台管理</router-link>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="postcss" scoped>
.HTbutton{
    @apply bg-violet-700 text-white rounded-md w-[100px] h-[40px]  flex justify-center items-center mx-7
}
.bgcImg{
    @apply w-[200px] h-[200px] rounded-full bg-contain
}
</style>
