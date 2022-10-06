<template>
    <div>
        <form @submit="onSubmit">
    <input type="text" placeholder="请输入正确的邮箱" v-model="usernameValue"/>
    <p>{{usernameError}}</p>
    <input type="text" placeholder="请输入正确的密码" v-model="passwordValue"/>
    <p>{{passwordMessage}}</p>
    <button>提交</button>
    </form>
    </div>
</template>

<script setup lang="ts">
// import { defineRule,useField,useForm} from 'vee-validate';
import {required,min,max ,confirmed,email} from '@vee-validate/rules'
import v from '@/plugins/validate/index'
import user from 'mock/user';
import userApi from '@/api/user'
import store from '@/util/store'
v.defineRule('required',required)
v.defineRule('email',email)
const {handleSubmit,errors}=v.useForm({
    initialValues:{
        username:'向军',
        password:''
    },//两个表单的初始值
    validationSchema:{
        username:v.yup.string().required().email(),
        password:v.yup.string().required().email()
    }//两个表单值须满足什么条件
})
const {errorMessage:usernameError,value:usernameValue} =v.useField('username',{
    required:true,email:true
})//定义表单元素
const {errorMessage:passwordMessage,value:passwordValue}=v.useField('password',{},{label:"密码"})
const onSubmit=  handleSubmit((value)=>{
    console.log(value)
       submit(value)
    alert("验证成功！")
}) 
const submit=async (value:any)=>{
   const res=await userApi.login(value) as any
   store.set('token',res.data.result.token)
}

</script>

<style type="scss" scoped>
    form{
        margin-top:-40px;
    }
input{
    @apply h-[50px] w-[300px]  my-8 outline-none border-violet-500 border-2
}
button{
    @apply text-white w-[150px] h-[50px] rounded-md bg-violet-700
}
p{
    @apply text-red-700 text-xl font-bold
}
</style>