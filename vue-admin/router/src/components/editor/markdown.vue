<script lang="ts" setup>
import { nextTick } from 'process';
import ToastUi from './toastui'
import Editor from '@toast-ui/editor'
//定义传过来的markdown编辑器接口
interface Props{
    initialModuleValue?:string//选中的元素名字，默认为#editor
    height?:number//高度默认为500
    placeholder?:string//编辑器中默认内容，默认为请输入内容
    initialType?:string//编辑器的类型，默认为markdown，可以改成wysiwyg
}
const editor=withDefaults(defineProps<Props>(),{
    initialModuleValue:'#editor',
    height:500,
    placeholder:'请输入内容',
    initialType:'markdown'
})
const emit=defineEmits(['update:modelValue'])//定义一个emit事件，用来更新父组件的值

//必须加上nextTick方法，等所有的DOM节点都渲染完了才创建新的编辑器，不然会找不到DOM元素报错
nextTick(()=>{
   const toastui= new ToastUi(
    //根据默认参数创建新的编辑器
    `${editor.initialModuleValue}`,
    `${editor.height}px`,
    `${editor.placeholder}`,
    `${editor.initialType}`)
    //调用editor的on方法，第一个参数为change，表示在编辑器中内容发生改变时，第二个参数为一个回调函数，默认第一个参数为当前使用的编辑器类型
    toastui.editor.on('change',(type:string)=>{
       emit('update:modelValue',toastui.editor[type==='markdown'?'getMarkdown':'getHTML']())//判断当前是什么编辑器，返回对应的内容，并执行emit方法，更新父组件中的值
    })
})
//通过yarn方式引入toasteditor必须要注意在DOM元素出来后再渲染editor，可以使用nextTick函数
</script>

<template>
 <div id="editor"></div>
</template>

<style lang="scss" scoped>
@import 'https://uicdn.toast.com/editor/latest/toastui-editor.min.css'; 
#editor{
    @apply bg-white;
    .toast-editor-mode-switch{
        display: none !important;
    }
    .fullscreen{
 position: fixed;
 left: 0;
 right: 0;
 top:0;
 bottom:0;
 z-index:999;
 background:#fff;
}
}

</style>