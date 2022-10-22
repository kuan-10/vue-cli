//左侧导航栏组件封装
<template>
  <div class="">
        <div class="leftContainer p-5" ref="linktag">
    <div class="pb-3 -mx-5">
    <i class="fa fa-feed text-3xl text-white px-7"></i>
     <span class="text-white">lk个人空间</span>
     </div>
     <dl>
      <dt class="text-white mb-6 mt-3" @click="$router.push('/admin/adminHome')" >
        <section class="flexStyle cursor-pointer" :class="{'bg-violet-700 mb-6 mt-3 rounded-md':$route.name==='adminHome'}">
          <i class="fa fa-reply text-3xl m-1"></i>
          <span class="-translate-x-4">dashborad</span>
        </section>
      </dt>
      <dt v-for="(item,index) of menu.menus" :key=index class="text-white mb-3" @click="handler(item)"><!--循环数组，渲染dt，dd组件，并且加上点击事件-->
        <section class="flexStyle cursor-pointer" >
          <i :class="item.icon" class="text-3xl"></i>
          <span>{{item.title}}</span>
          <i :class="{'rotate-180':item.isClicked}" class="fa fa-arrow-down ar"></i>
        </section>
        <dd  v-for="(cmenu,index) of item.children" :key="index" class="buttonStyle" :class="{'active':true}" v-show="cmenu?.isClicked" @click="handler(item,cmenu)"><span>{{cmenu.title}}</span></dd>
      </dt>
     
     </dl>
     </div>
     </div>
</template>

<script setup lang="ts">
import menuStore from '@/store/menuStore'
import { IMenu } from '#/menu';
import router from '@/router';
import { computed, ref, watch, watchEffect } from 'vue';
import leftmenu from '@/store/adminMenu'
import { link } from 'fs';
const menu=menuStore()

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
    let  close=computed(()=>{
      return leftmenu().isClosed
    })
    const linktag=ref() as any
    watch(close,()=>{
     if(close.value){
      linktag.value.classList.add('close')
      console.log(1)
     }
     else{
      linktag.value.classList.remove('close')
      console.log(2)
     }
    })
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
.close{
   @apply w-[80px];
   span{
    @apply hidden
   }
   dl{
    dt{
      dd{
    @apply hidden
   }
    }
   }
   .ar{
    @apply hidden
   }
}
</style>