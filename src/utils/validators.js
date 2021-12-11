import * as yup from 'yup';

export const signUpSchema = yup.object({
  email: yup.string().required().min(6).email(),
  password: yup.string().min(6).required(),
  password_repeat: yup
    .string()
    .oneOf([yup.ref('password'), null], "Passwords aren't equal!")
    .required(),
  first_name: yup.string().min(1).notRequired(),
  last_name: yup.string().min(1).notRequired(),
});

export const signInSchema = yup.object({
  email: yup.string().required().min(6).email(),
  password: yup.string().min(6).required(),
  mfa: yup.string(),
});