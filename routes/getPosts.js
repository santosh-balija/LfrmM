// const express = require('express');
// const router = new express.Router();
// const { Post } = require('./../models/post');
// const authentication = require('../middleware/authentication');

// router.get('/', authentication, async (req, res) => {
//   console.log('Hello from newpost');
//   const user_id = req.payload._id;
//   let posts;
//   if (user_id) {
//     posts = await Post.find();
//   } else {
//   }
//   res.json({ posts: posts });
// });

// module.exports = router;
