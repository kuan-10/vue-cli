<template>
    <div class="grid grid-flow-col gap-3">
    <el-card shadow="always"  v-for="(card,index) of data" :key="index" class="h-[200px]"
    :body-style="{ padding: '20px' }">
    <template #header>
    <div class="flex justify-center items-center">
    <span class="block text-sm pr-3">{{card.title}}</span>
    <el-tag type="danger" size="mini"  effect="dark" closable @close="" class="-mr-2">月</el-tag>
    <!--card title-->
    </div>
    </template>
    <div class="flex justify-between items-center"><!--这个是卡片的身体部分-->
    <span class="text-3xl">${{card.price}}</span>
    <div>
    <i class=" text-gray-500 text-xl mr-5"></i>
    <i :class="[card.icon,card.iconColor]" class="text-2xl -mr-2 w-8 cursor-pointer"></i> 
</div>    
 </div>
    <div class="flex justify-between items-center mt-5">
        <p>{{card.cardTitle}}</p>
        <p>{{card.total}}</p>
    </div>
    <!-- card body -->
    </el-card>
    </div>
    <div class="flex justify-center items-center">
    <div id="echart1" style="width:700px;height:600px;" class="mr-5"></div>
    <div id="echart2" style="width:600px;height:400px;">
    </div>
    </div>
</template>

<script setup lang="ts">
import { nextTick } from 'vue';
import {echart1,echart2} from './echarts'
import * as echarts from 'echarts'
interface cardItem{
    title:string//标题
    price:number//总价格
    icon:string//图片
    iconColor:string//图片颜色
    cardTitle:string//卡片标题
    total:number//总人数
}
const data:cardItem[]=[
    {
        title:"用户数",//标题
    price:2922,//总价格
    icon:"fa fa-dollar",//图片
    iconColor:"bg-violet-500",//图片颜色
    cardTitle:"总人数",//卡片标题
    total:200
},
{
        title:"销售额",//标题
    price:4982,//总价格
    icon:"fa fa-id-card",//图片
    iconColor:"bg-green-500",//图片颜色
    cardTitle:"总人数",//卡片标题
    total:300
},
{
        title:"会员数",//标题
    price:6573,//总价格
    icon:"fa fa-drivers-license",//图片
    iconColor:"bg-blue-500",//图片颜色
    cardTitle:"总人数",//卡片标题
    total:400
},
{
        title:"总价钱",//标题
    price:29228,//总价格
    icon:"fa fa-check-square",//图片
    iconColor:"bg-yellow-500",//图片颜色
    cardTitle:"总人数",//卡片标题
    total:600
}
]
nextTick(()=>{
    var chartDom = document.getElementById('echart1')!;
var myChart = echarts.init(chartDom as HTMLDivElement);
myChart.setOption(echart1)
var chartDom = document.getElementById('echart2')!;
var myChart = echarts.init(chartDom as HTMLDivElement);
myChart.setOption(echart2)
})
</script>

<style scoped>

</style>