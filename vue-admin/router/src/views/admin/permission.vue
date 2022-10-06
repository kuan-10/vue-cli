<template>
    <div>
        <van-form @submit="onSubmit">
  <van-cell-group inset>
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
    import {ref} from 'vue'
 const username = ref('')
    const password = ref('')
    const onSubmit = (values:any) => {
      console.log('submit', values);
    }
    const validator=(val:any)=>{
        return /@/.test(val)===true?true:false
    }
    const passwordValidator=(val:any)=>{
        return /[0-9]/.test(val)===true?true:false
    }
    console.log(passwordValidator(password))
</script>

<style lang="scss" scoped>

</style>