//左侧导航栏组件封装
<template>
        <div class="leftContainer p-5">
    <div class="pb-3 -mx-5">
    <i class="fa fa-feed text-2xl text-white px-8"></i>
     <span class="text-white">lk个人空间</span>
     </div>
     <dl>
      <dt v-for="(item,index) of menu.menus" :key=index class="text-white mb-3" @click="handler(item)"><!--循环数组，渲染dt，dd组件，并且加上点击事件-->
        <section class="flexStyle cursor-pointer" >
          <i :class="item.icon" class="text-3xl"></i>
          <span>{{item.title}}</span>
          <i :class="{'rotate-180':item.isClicked}" class="fa fa-arrow-down"></i>
        </section>
        <dd v-for="(cmenu,index) of item.children" :key="index" class="buttonStyle" :class="{'active':true}" v-show="cmenu?.isClicked" @click="handler(item,cmenu)">{{cmenu.title}}</dd>
      </dt>
     
     </dl>
     </div>
</template>

<script setup lang="ts">
import menuStore from '@/store/menuStore'
import {useRouter } from 'vue-router';
import { IMenu } from '#/menu';
import router from '@/router';
const menu=menuStore()
console.log(menu.menus)
const routerService=useRouter()

     const handler=(pmenu:IMenu,cmenu?:IMenu)=>{
      reset()//每次点击之前重置一下，重置的方法就是把整个menu数据所有的active都设置为假，然后点击之后将对应的active设置为真
      pmenu.isClicked=true
      pmenu.children?.forEach(item=>{
        if(item){
          item.isClicked=true
        }
        if(cmenu){
          router.push({name:cmenu.route})
        }
      })
      
     }
     const reset=()=>{
     menu.menus.forEach(menu=>{
        menu.isClicked=false
        menu.children?.forEach(cmenu=>{
          if(cmenu){
            cmenu.isClicked=false
          }
        })
      })
     }
</script>

<style lang="scss" scoped>
.leftContainer{
  @apply w-[200px] bg-gray-700 min-h-screen;
  .buttonStyle{
  @apply bg-violet-500 my-5 mt-2 h-[45px]
  flex justify-start items-center rounded-md
   hover:bg-violet-700 duration-300 text-gray-200 text-sm pl-4 cursor-pointer
}
}
.flexStyle{
  @apply flex justify-between items-center
}
.active{
  @apply bg-violet-700
}
</style>