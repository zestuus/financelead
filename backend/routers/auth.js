const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { verify } = require('2fa-util');

const db = require('../../db/models');
const { signUpSchema, signInSchema } = require('../validation');

const router = express.Router();

router.post('/sign-up', async (req, res) => {
  const { email, password, first_name, last_name } = req.body;
  const { error } = signUpSchema.validate(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const existingUser = await db.User.findOne({ where: { email } });

  if (existingUser) {
    return res.status(400).send("User already exists!");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const userData = { password: hashedPassword, first_name, last_name, email };
  const user = db.User.build(userData);

  try {
    const existingUser = await user.save();
    const token = jwt.sign({ id: existingUser.id, email }, process.env.TOKEN_SECRET)

    res.send(token);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post('/sign-in', async (req, res) => {
  const { email, password, mfa } = req.body;
  const { error } = signInSchema.validate(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const existingUser = await db.User.findOne({ where: { email } });
  const validPassword = existingUser && await bcrypt.compare(password, existingUser.password);

  if (!existingUser || !validPassword) {
    return res.status(400).send("Bad credentials!");
  }

  let token = 'mfa';
  console.log(mfa, existingUser.mfa);
  const mfaValid = !existingUser.mfa || verify(mfa, existingUser.mfa);
  if (mfaValid) {
    token = jwt.sign({id: existingUser.id, email}, process.env.TOKEN_SECRET);
  }

  res.send(token);
});

module.exports = router;