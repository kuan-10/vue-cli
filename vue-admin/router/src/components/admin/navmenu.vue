<script lang="ts" setup>
import { CacheEnum } from '@/enum/cacheEnum';
import router from '@/router';
import store from '@/util/store';

  const logout=()=>{
    store.remove(CacheEnum.TOKEN_NAME)
    router.push({name:'home'})
  }
</script>

<template>
 <div class="outline">
        <div class="text-gray-600 ml-2 cursor-pointer text-center border-bottom">
          <a class="fa fa-linode -translate-x-2 translate-y-0.5 text-xl"></a>
          <span>网站首页</span>
        </div>
        <div class="text-gray-600 ml-2 cursor-pointer text-center my-3">
          <a class="fa fa-linode -translate-x-2 translate-y-0.5 text-xl"></a>
          <span>文档管理</span>
        </div>
        <div class="text-gray-600 ml-2 cursor-pointer text-center my-3" @click="logout">
          <a class="fa fa-linode -translate-x-2 translate-y-0.5 text-xl"></a>
         <span>退出登录</span>
         </div>
      </div>
</template>

<style lang="scss" scoped>
.outline{
  position: absolute;
  top:45px;
  left:-10px;
  border: 0.5px solid gray;
  width:120px;

}</style>