<script lang="ts" setup>
import toastEditor from '@/components/editor/markdown.vue'
import {ref} from 'vue'
let content=ref('1')
</script>

<template>
 <toastEditor v-model="content" :height="300" initialType="markdown" placeholder=""></toastEditor>
 {{content}}
</template>

<style lang="scss" scoped>
#editor{
    @apply bg-white;
    .toast-editor-mode-switch{
        display: none !important;
    }
   
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
</style>