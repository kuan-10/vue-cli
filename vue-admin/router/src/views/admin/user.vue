<script lang="ts" setup>
    import { Form, Field, ErrorMessage } from 'vee-validate';
    import VeeValidate, { validate } from 'vee-validate'
    const validateEmail = (value: any) => {
        return /@/.test(value) ? true : '邮箱格式错误'
    }
    
    const onSubmit = () => {
        alert('验证通过时执行')
    }
    
    </script>
    <template>
     
            <Field  type="text" name="email" :rules="validateEmail" label="帐号" :validate-on-input="true"/>
            <ErrorMessage name="email" />
            <hr />
            <button>提交</button>

        <div>
            <input type="text">
            </div>
    </template>
<style lang="scss" scoped>
div{
    @apply h-screen w-screen flex justify-center items-center flex-col;
    input{
    @apply w-[500px] h-[40px] outline-none border-violet-500 border-2 my-8;
}
}
</style>