<template>
    <div class="flex justify-between items-center bg-white">
    <div class="bg-white p-4">
        <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">编辑器</el-breadcrumb-item>
    <el-breadcrumb-item><a href="/">富文本编辑器</a></el-breadcrumb-item>
  </el-breadcrumb>
  </div>
  <div class="relative flex justify-center items-center mx-10">
      <img src="@/assets/images/harden.webp" alt="" class="w-8 h-8 rounded-full object-cover">
      <span class="text-sm text-gray-900 translate-x-2">路宽本人</span>
      <div class="absolute translate-y-10">
        <a class="fa fa-linode translate-y-1/5"></a>
        <span class="text-gray-600 ml-2 cursor-pointer">网站首页</span>
      </div>
      <div class="absolute translate-y-20">
        <a class="fa fa-linode translate-y-1/5"></a>
        <span class="text-gray-600 ml-2 cursor-pointer">网站首页</span>
      </div>
  </div>

    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>

</style>