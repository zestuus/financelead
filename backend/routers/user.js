const express = require('express');
const Cryptr = require('cryptr');
const { generateSecret } = require('2fa-util');

const { privateRoute } = require('../middlewares');

const db = require('../../db/models');

const router = express.Router();

router.get('/profile', privateRoute, async (req, res) => {
  const { id } = req.user;
  try {
    const user = await db.User.findOne({ where: { id } });

    if (!user) {
      return res.status(403).send("Invalid token!");
    }

    const { first_name, last_name, email, mfa } = user;
    res.send({ first_name, last_name, email, mfaEnabled: !!mfa });
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post('/mfa', privateRoute, async (req, res) => {
  const { id } = req.user;

  try {
    const user = await db.User.findOne({ where: { id } });

    if (!user) {
      return res.status(403).send("Invalid token!");
    }

    const { mfa, first_name, last_name } = user;

    if (mfa) {
      return res.status(403).send("MFA is already enabled!");
    }

    const { qrcode, secret } = await generateSecret(`${first_name} ${last_name}`, 'financelead');
    const cryptr = new Cryptr(process.env.TOKEN_SECRET);

    user.mfa = cryptr.encrypt(secret);
    await user.save();

    res.send({ qrcode });
  } catch (err) {
    res.status(400).send(err);
  }
});

router.delete('/mfa', privateRoute, async (req, res) => {
  const { id } = req.user;

  try {
    const user = await db.User.findOne({ where: { id } });

    if (!user) {
      return res.status(403).send("Invalid token!");
    }

    const { mfa } = user;

    if (!mfa) {
      return res.status(403).send("MFA is already disabled!");
    }

    user.mfa = null;

    await user.save();

    res.send();
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;