//左侧导航栏组件封装
<template>
        <div class="leftContainer p-5">
    <div class="pb-3 -mx-5">
    <i class="fa fa-feed text-2xl text-white px-8"></i>
     <span class="text-white">lk个人空间</span>
     </div>
     <dl>
      <dt v-for="(item,index) of menu" :key=index class="text-white" @click="handler(item)">
        <section class="flexStyle cursor-pointer" >
          <i :class="item.icon" class="text-3xl"></i>
          <span>{{item.title}}</span>
          <i class="fa fa-arrow-down"></i>
        </section>
        <dd v-for="(content,index) of item.children" class="buttonStyle" v-show="content.active">{{content.title}}</dd>
      </dt>
     </dl>
     </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
interface menuItem{
  title?:string
  icon?:string
  active?:boolean
}
interface Menu extends menuItem{
  children?:menuItem[]
}
const menu=ref< Menu []>([
     {
       title:"错误页面",
       icon:"fa fa-digg",
       children:[
        {
          title:"404页面",
          active:true
        },
        {
          title:"403页面",
          active:true
        },
        {
          title:"500页面",
          active:true
        }
       ]
     },{
      title:"编辑器",
      icon:"fa fa-free-code-camp",
      children:[
        {
          title:"markdown编辑器"
        },
        {
          title:"富文本编辑器"
        }
      ]
     }
     ] )
     const handler=(item:Menu)=>{
      reset()
        item.children?.forEach((item)=>{
            item.active=true
        })
     }
     const reset=()=>{
       menu.value.forEach(item=>{
        item.children?.forEach(item=>{
           item.active=false
        })
       })
     }
</script>

<style lang="scss" scoped>
.leftContainer{
  @apply w-[200px] bg-gray-700 h-screen;
  .buttonStyle{
  @apply bg-violet-700 my-5 mt-2 h-[45px] 
  flex justify-start items-center rounded-md
   hover:bg-violet-500 duration-300 text-gray-200 text-sm pl-4 cursor-pointer
}
}
.flexStyle{
  @apply flex justify-between items-center
}
</style>