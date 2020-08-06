const express = require('express');
const router = new express.Router();
const bcrypt = require('bcrypt');
const { User } = require('./../models/users');
const { Interests } = require('./../models/Interests');

router.post('/', async (req, res) => {
  console.log(req.body);
  let user = await User.findOne({ email: req.body.email });
  if (user) {
    console.log('Already Registered User');
    return;
  }
  const interests_array = [];
  console.log(req.body.selected_interests);
  for (let id in req.body.selected_interests) {
    console.log(req.body.selected_interests[id]);
    const interest = await Interests.findOne({
      _id: req.body.selected_interests[id],
    });
    interests_array.push(interest._id);
  }
  // console.log(interests_array);
  // console.log(req.body);
  user = new User({
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    password: req.body.password,
    designation: req.body.designation,
    institute: req.body.institute,
    interests: req.body.selected_interests,
    follower: [],
  });
  try {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    user = await user.save();
  } catch (e) {
    console.log(e);
  }

  const token = user.generateAuthToken();
  console.log(token);
  res
    .cookie('Lfrm-jwt-token', token, { httpOnly: false, maxAge: 10000 })
    .send({ name: user.fname });
});

module.exports = router;
