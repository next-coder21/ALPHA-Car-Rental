import * as Yup from "yup";

export const isEmail = Yup.string()
  .required()
  .email("Enter a valid email!");

export const isPassword = Yup.string()
  .required("Password is required!")
  .matches(
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,20}$/,
    "Your password must be 6-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji."
  );

  export const isNumber = (message = 'A phone number is required') =>
  Yup.number()
    .typeError('That doesn\'t look like a phone number')
    .positive('A phone number can\'t start with a minus')
    .integer('A phone number can\'t include a decimal point')
    .min(10, message)
    .max(10,message)
    .required();


export const isText = (fieldName) =>
  Yup.string()
    .required()
    .matches(/^[a-zA-Z ]*$/, `${fieldName} is only contains text!`);

export const comparePassword = (fieldName) =>
  Yup.string()
    .required()
    .matches(/^[a-zA-Z ]*$/, `${fieldName} is Only contains text!`);