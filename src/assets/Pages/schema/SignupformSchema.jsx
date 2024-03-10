import * as Yup from  'yup';
import { isEmail , isNumber, isPassword ,isText } from './common';


export const SignupformSchema=Yup.object({
    fullName:isText("fullName"),
    email : isEmail,
    password:isPassword,
    mobileNumber:isNumber,
})