<template>
    <div class="flex justify-between items-center bg-white">
    <div class="bg-white p-4">
        <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">编辑器</el-breadcrumb-item>
    <el-breadcrumb-item><a href="/">富文本编辑器</a></el-breadcrumb-item>
  </el-breadcrumb>
  </div>
  <div class="relative flex justify-center items-center mx-10" @mouseenter="toggleTrue">
      <img src="@/assets/images/harden.webp" alt="" class="w-8 h-8 rounded-full object-cover">
      <span class="text-sm text-gray-900 translate-x-2">路宽本人</span>
      <navmenu v-show="isShow"  @mouseenter="toggleTrue"></navmenu>
  </div>
    </div>
</template>

<script setup lang="ts">
import navmenu from '@/components/admin/navmenu.vue'
import {ref} from 'vue'
let isShow=ref(false)
const toggleTrue=()=>{
 isShow.value=true
}
const toggleFalse=()=>{
 isShow.value=false
}
</script>

<style lang="scss" scoped>


</style>