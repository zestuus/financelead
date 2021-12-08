const joi = require('joi');

const signUpSchema = joi.object({
  email: joi.string().min(6).email().required(),
  password: joi.string().min(6).required(),
  full_name: joi.string().min(6).optional(),
});

const signInSchema = joi.object({
  email: joi.string().min(6).email().required(),
  password: joi.string().min(6).required(),
});

module.exports = { signUpSchema, signInSchema };