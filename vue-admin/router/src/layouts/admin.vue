<script setup lang="ts">
import admin from '@/layouts/components/admin.vue'
import navbar from '@/layouts/components/navbar.vue'
import historyLink from '@/layouts/components/historyLink.vue'
import menuStore from '@/store/menuStore';
menuStore().init()
</script>
<template>
  <div class="h-screen w-screen flex">
 <admin></admin><!--左侧管理菜单-->
  <div class="rightContainer">
    <navbar></navbar>
    <history-link></history-link>
    <div class="p-5 m-3 bg-white">
      <router-view #default="{Component}">
         <Transition enter-active-class="animate__animated animate__backInRight">
          <component :is="Component" />
         </Transition>
      </router-view>
    </div>
      </div>
    </div>
</template>
<style lang="scss" scoped>

.rightContainer{
  @apply flex-1 bg-cyan-200
}

</style>
<script lang="ts">
export default {
    route: { meta : { auth:true}
}
}
  </script>
