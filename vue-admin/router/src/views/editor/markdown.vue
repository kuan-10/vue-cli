<script lang="ts" setup>
import toastEditor from '@/components/editor/markdown.vue'
import {ref} from 'vue'
let content=ref('1')
</script>

<template>
 <toastEditor v-model="content" :height="300" initialType="markdown" placeholder=""></toastEditor>
 {{content}}
</template>

<style lang="scss" scoped></style>