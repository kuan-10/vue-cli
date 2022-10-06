<script lang="ts" setup>
    import { Form, Field, ErrorMessage } from 'vee-validate';
    
    const validateEmail = (value: any) => {
        return /@/.test(value) ? true : '邮箱格式错误'
    }
    
    const onSubmit = () => {
        alert('验证通过时执行')
    }
    
    </script>
    <template>
        <Form @submit="onSubmit">
            <Field name="email" :rules="validateEmail" label="帐号" :validate-on-input="true"/>
            <ErrorMessage name="email" />
            <button>提交</button>
        </Form>
    </template>
<style scoped>

</style>