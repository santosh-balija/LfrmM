// const express = require('express');
// const router = new express.Router();
// const bcrypt = require('bcrypt');
// const { User } = require('./../models/users');
// const { Interests } = require('./../models/Interests/Interests');

// router.post('/', async (req, res) => {
//   console.log(req.body);
//   let user = await User.findOne({ email: req.body.email });
//   if (user) {
//     console.log('Already Registered User');
//     return;
//   }
//   const interests_array = [];
//   for (let id in req.body.selected_interests) {
//     console.log(req.body.selected_interests[id]);
//     const interest = await Interests.findOne({
//       _id: req.body.selected_interests[id],
//     });
//     interests_array.push(interest._id);
//   }
//   console.log(interests_array);
//   user = new User({
//     fname: req.body.fname,
//     lname: req.body.lname,
//     email: req.body.email,
//     password: req.body.password,
//     interests: req.body.selected_interests,
//   });
//   const salt = await bcrypt.genSalt(10);
//   user.password = await bcrypt.hash(user.password, salt);
//   user = await user.save();
//   const token = user.generateAuthToken();
// });

// module.exports = router;
