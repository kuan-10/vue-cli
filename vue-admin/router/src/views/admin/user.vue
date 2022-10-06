<script lang="ts" setup>
   import { Form, Field, ErrorMessage } from 'vee-validate';
   import {min,max,email} from '@vee-validate/rules'
const validateEmail = (value: any) => {
	return /@/.test(value) ? true : '邮箱格式错误'
}

const onSubmit = (value: any) => {
    if(validateEmail(value)){
        alert('验证通过时执行')  
    }
    else{
        alert("验证失败")
    }
}

    
    </script>
   <template>
	<div>
        <Form  @submit="onSubmit">
        <Field name="email" :rules="validateEmail" label="帐号" :validate-on-input="true"/>
        <ErrorMessage name="email"></ErrorMessage> -->
        </Form>
    </div>
</template>
<style lang="scss" scoped>

</style>