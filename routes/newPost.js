// const express = require('express');
// const router = new express.Router();
// const { Post } = require('./../models/post');
// const authentication = require('../middleware/authentication');

// router.post('/', authentication, async (req, res) => {
//   console.log('Hello from newpost');
//   const user_id = req.payload._id;
//   let newPost = new Post({
//     user: user_id,
//     mistake: req.body.mistake,
//     learning: req.body.learning,
//     date: Date.now(),
//   });
//   newPost = await newPost.save();
//   res.send({ success: true });
// });

// module.exports = router;
