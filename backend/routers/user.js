const express = require('express');

const db = require('../../db/models');
const { privateRoute } = require('../middlewares');

const router = express.Router();

router.get('/profile', privateRoute, async (req, res) => {
  const { id } = req.user;
  const user = await db.User.findOne({ where: { id } });

  if (!user) {
    return res.status(403).send("Invalid token!");
  }

  const { full_name, email } = user;
  res.send({ full_name, email });
})

module.exports = router;