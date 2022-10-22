<script lang="ts" setup>
import { nextTick } from 'process';
import {ref} from 'vue'
 const activeName=ref('site')
 let active=ref(false)
 const isClick=()=>{
    active.value=!active.value
 }
 nextTick(()=>{
  document.documentElement.addEventListener('click',()=>{
    active.value=false
  })
 })//这一块是处理站内消息面板在点击消息外部时可以消失，在页面渲染时，active置为假，
 //在点击图标时，将active的值取反，
 //但这是会有个问题就是点击消息面板内部，这个面板也会消失的，所以这是要在两个面板上加上阻止冒泡事件
</script>

<template>
  <div class="notification">
    <i class="fa fa-bullhorn -translate-x-8" @click.stop="active=!active"></i>
    <el-tabs v-model="activeName" class="list" v-show="active" @click.stop>
    <el-tab-pane label="系统通知" name="site">
 notification
     </el-tab-pane>
    <el-tab-pane label="站内消息" name="message" @click.stop>
    Task
    </el-tab-pane>
    
    </el-tabs>
    
  </div>
</template>

<style lang="scss" scoped>
.notification{
    @apply absolute right-[180px];
.list{
   @apply p-5 bg-white border rounded-md absolute top-8 -right-10
}
}
</style>