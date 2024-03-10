import * as Yup from "yup";

export const isEmail = Yup.string()
  .required("Email is required!")
  .email("Enter a valid email!");

export const isPassword = Yup.string()
  .required("Password is required!")
  .matches(
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,20}$/,
    "Your password must be 6-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji."
  );

export const isNumber =Yup.number();


export const isText = (fieldName) =>
  Yup.string()
    .required(`${fieldName} is required!`)
    .matches(/^[a-zA-Z ]*$/, `${fieldName} is only contains text!`);

export const comparePassword = (fieldName) =>
  Yup.string()
    .required(`${fieldName} is required!`)
    .matches(/^[a-zA-Z ]*$/, `${fieldName} is Only contains text!`);