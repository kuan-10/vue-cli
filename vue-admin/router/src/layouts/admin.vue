<script setup lang="ts">
import navBar from '@/layouts/components/nav.vue'
</script>
<template>
  <div class="h-screen w-screen flex">
 <navBar></navBar>
  <div class="rightContainer">
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
