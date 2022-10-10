<script setup lang="ts">

</script>
<template>
  <div class="h-screen w-screen flex">
  <div class="leftContainer p-5">
    <div class="flex justify-start items-center pb-3">
    <i class="fa fa-feed text-2xl text-white px-8"></i>
     <span class="text-white">lk个人空间</span>
     </div>
     <dl>
      <dt class="text-white">
        <section class="flex justify-between items-center">
          <i class="fa fa-digg text-3xl"></i>
          <span>错误页面</span>
          <i class="fa fa-arrow-down"></i>
        </section>
        <dd class="buttonStyle">404页面</dd>
        <dd class="buttonStyle">403页面</dd>
      </dt>
      <dt>
        <section>成功页面</section>
        <dd class="buttonStyle">
             404页面
        </dd>
        <dd class="buttonStyle">
             500页面
        </dd>
      </dt>
     </dl>
  </div>
  <div class="rightContainer">
      <router-view ></router-view>
      </div>
      </div>
</template>
<style lang="scss" scoped>
.leftContainer{
  @apply w-[200px] bg-gray-700 h-screen;
  .buttonStyle{
  @apply bg-violet-700 my-5 mt-2 h-[45px] 
  flex justify-start items-center rounded-md
   hover:bg-violet-500 duration-300 text-gray-200 text-sm pl-4 cursor-pointer
}
}
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
