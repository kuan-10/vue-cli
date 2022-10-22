<template>
    <div class="flex justify-between items-center bg-white">
    <div class="bg-white p-4">
        <el-breadcrumb separator="/" class="relative">
            <i class="iconfont icon-backward absolute -left-3 -top-2 text-2xl cursor-pointer" @click="handler" :class="{'rotate-180': leftmenu().isClosed}"></i>
    <el-breadcrumb-item :to="{ path: '/' }" class="ml-5">编辑器</el-breadcrumb-item>
    <el-breadcrumb-item><a href="/">富文本编辑器</a></el-breadcrumb-item>
  </el-breadcrumb>
  </div>
  <notification ></notification>
  <i class="iconfont icon-quanping absolute top-2 right-[150px] text-3xl" @click="fullscreen"></i>
  <div class="relative flex justify-center items-center mx-10" @click="toggleTrue">
      <img src="@/assets/images/harden.webp" alt="" class="w-8 h-8 rounded-full object-cover">
      <span class="text-sm text-gray-900 translate-x-2">路宽本人</span>
      <navmenu v-show="isShow"></navmenu>
  </div>

</div>
</template>

<script setup lang="ts">
import navmenu from '@/components/admin/navmenu.vue'
import {ref} from 'vue'
import leftmenu from '@/store/adminMenu'
import notification from '@/components/messagtable/notification.vue'
let isShow=ref(false)
const toggleTrue=()=>{
 isShow.value=!isShow.value
}
const handler=(e:MouseEvent)=>{
if(!(e.target as any).getAttribute('class').includes('close')){
    (e.target as any).classList.add('close')
    leftmenu().isClosed=true
}
else{
    (e.target as any).classList.remove('close')
    leftmenu().isClosed=false
}
}
const fullscreen=()=>{
    document.documentElement.requestFullscreen()
}
</script>

<style lang="scss" scoped>

</style>