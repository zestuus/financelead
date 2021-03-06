const joi = require('joi');

const signUpSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
  first_name: joi.string().min(1).optional(),
  last_name: joi.string().min(1).optional(),
});

const signInSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required(),
  mfa: joi.string(),
});

module.exports = { signUpSchema, signInSchema };