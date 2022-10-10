<script setup lang="ts">
import admin from '@/layouts/components/admin.vue'
import navbar from '@/layouts/components/navbar.vue'
</script>
<template>
  <div class="h-screen w-screen flex">
 <admin></admin><!--左侧管理菜单-->
  <div class="rightContainer">
    <navbar></navbar>
      <router-view ></router-view>

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
