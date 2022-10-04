<template>
    <div>
        <input type="text" class="inputStyle" placeholder="请输入用户名" :value="props.modelValue" @input="$emit('update:modelValue',($event)=>event.target.value)"/>
    </div>
</template>

<script setup lang="ts">
const props=defineProps({
    modelValue:String,

})
</script>

<style lang="postcss" scoped>
.inputStyle{
   @apply block w-4/5 m-auto my-12 h-8 rounded-md hover:border-2 hover:w-11/12 hover:h-12 focus:outline-none bg-white
}
input:hover{
   border-color: violet;
}
input{
    border: 2px solid black;
}
</style>