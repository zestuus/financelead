const express = require('express');
const { generateSecret } = require('2fa-util');

const db = require('../../db/models');
const { privateRoute } = require('../middlewares');

const router = express.Router();

router.get('/profile', privateRoute, async (req, res) => {
  const { id } = req.user;
  const user = await db.User.findOne({ where: { id } });

  if (!user) {
    return res.status(403).send("Invalid token!");
  }

  const { first_name, last_name, email, mfa } = user;
  res.send({ first_name, last_name, email, mfaEnabled: !!mfa });
});

router.post('/mfa', privateRoute, async (req, res) => {
  const { id } = req.user;
  const user = await db.User.findOne({ where: { id } });

  if (!user) {
    return res.status(403).send("Invalid token!");
  }

  const { mfa, first_name, last_name } = user;

  if (mfa) {
    return res.status(403).send("MFA is already enabled!");
  }

  const { qrcode, secret } = await generateSecret(`${first_name} ${last_name}`, 'financelead');

  user.mfa = secret;

  try {
    await user.save();
  } catch (err) {
    res.status(400).send(err);
  }

  res.send({ qrcode });
});

router.delete('/mfa', privateRoute, async (req, res) => {
  const { id } = req.user;
  const user = await db.User.findOne({ where: { id } });

  if (!user) {
    return res.status(403).send("Invalid token!");
  }

  const { mfa } = user;

  if (!mfa) {
    return res.status(403).send("MFA is already disabled!");
  }

  user.mfa = null;

  try {
    await user.save();
  } catch (err) {
    res.status(400).send(err);
  }

  res.send();
});

module.exports = router;