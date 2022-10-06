//验证工具封装
import * as VeeValidate from 'vee-validate'
import rules from '@vee-validate/rules'
import yup from './yup'   
Object.keys(rules).forEach(
        key=>{
            VeeValidate.defineRule(key,rules[key])
        }
    )
const modules={yup,...VeeValidate}
export default modules