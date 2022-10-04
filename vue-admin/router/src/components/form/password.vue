<template>
    <div>
        <input type="password"  class="inputStyle" placeholder="请输入密码"/>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="postcss" scoped>
.inputStyle{
   @apply block w-4/5 m-auto my-12 h-8 rounded-md hover:border-2 hover:w-11/12 hover:h-12 focus:outline-none bg-white
}
input:hover{
   border-color: violet;
}
input{
    border:solid 2px black;
}
</style>