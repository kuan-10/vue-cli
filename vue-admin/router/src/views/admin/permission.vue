<template>
    <div class="w-screen h-screen flex justify-center items-center">
        <van-form @submit="onSubmit">
  <van-cell-group inset class="border-2">
    <van-field
      v-model="username"
      name="用户名"
      label="用户名"
      placeholder="用户名"
      :rules="[{ required: true, message: '请填写用户名' },{
        validator,message: '请输入正确邮箱' }]"
    />
    <van-field
      v-model="password"
      type="password"
      name="密码"
      label="密码"
      placeholder="密码"
      :rules="[{ required: true, message: '请填写密码' },{
      passwordValidator,message: '请输入正确的密码格式'
      }]"
    />
  </van-cell-group>
  <div style="margin: 16px;">
    <van-button round block type="primary" native-type="submit">
      提交
    </van-button>
  </div>
</van-form>
    </div>
</template>

<script setup lang="ts">
    import store from '@/util/store';
    import  userApi from '@/api/user'
import {ref} from 'vue'
 const username = ref('')
    const password = ref('')
    const onSubmit= (value: any)=>{
       submit(value)
    alert("验证成功！")
}
const submit=async (value:any)=>{
   const res=await userApi.login(value) as any
   store.set('token',{expire:100,token:res.data.result.token})
}

    const validator=(val:any)=>{
        return /@/.test(val)===true?true:false
    }
    const passwordValidator=(val:any)=>{
        return /[0-9]/.test(val)===true?true:false
    }
   
</script>

<style lang="scss" scoped>

</style>