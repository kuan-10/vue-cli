
<script setup lang="ts">
  import helper from '@/types/helper'
  import  userApi from '@/api/user'
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
const response=await userApi.login()
console.log(response)
</script>

<template>
  <router-view></router-view>
</template>

<style scoped>
body{
  margin:0;
  padding: 0;
}
</style>
