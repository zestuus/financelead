import * as yup from 'yup';

export const signUpSchema = yup.object({
  email: yup.string().required().min(6).email(),
  password: yup.string().min(6).required(),
  password_repeat: yup
    .string()
    .oneOf([yup.ref('password'), null], "Passwords aren't equal!")
    .required(),
  full_name: yup.string().notRequired().min(6),
});

export const signInSchema = yup.object({
  email: yup.string().required().min(6).email(),
  password: yup.string().min(6).required(),
});