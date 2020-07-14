const express = require('express');
const bcrypt = require('bcrypt');
const router = new express.Router();
const { User } = require('./../models/users');
const jwt = require('jsonwebtoken');
const authentication = require('./../middleware/authentication');

router.post('/', async (req, res) => {
  console.log(req.body);
  let user = await User.findOne({ email: req.body.email });
  if (!user) {
    res.send({ new_user: true });
    return;
  }
  // return bool
  const validPassword = bcrypt.compare(req.body.password, user.password);
  if (!validPassword) {
    res.send({ password: 'error' });
    return;
  }
  console.log(user.fname);
  // Send the JSW token
  const token = user.generateAuthToken();
  res
    .cookie('Lfrm-jwt-token', token, { httpOnly: false, maxAge: 50000 })
    .send({ name: user.fname })
    .redirect('/');
});

module.exports = router;
