<template>
    <div class="w-full h-full  flex justify-center items-center">
    <div class=" container  bg-cyan-100">
        <div class="bg-white">
            <h2 class="text-xl my-10 font-semibold text-center">会员登陆</h2>
           <inputText/>
           <inputPassword/>
           <loginButton/>
           <div class="space-x-4 mx-10 my-5 text-gray-500">
        <a href="">网站首页</a>
        <a href="">会员注册</a>
        <a href="">找回密码</a>
        <a href="">客服中心</a>
    </div>
        </div>
        <div class="h-full"><img src="@/assets/images/login.jpeg" alt="" class="h-full hidden md:block"></div>   
    </div>
    </div>
</template>

<script setup lang="ts">
import inputText from '@/components/form/input.vue'
import inputPassword from '@/components/form/password.vue'
import loginButton from '@/components/form/loginButton.vue'
</script>

<style lang="scss" scoped>
body{
margin:0px;
padding:0px;
}
.container{
   @apply w-[792px] h-4/5 my-32 md:grid grid-cols-2 
}

.block{
    display: block;
}
</style>