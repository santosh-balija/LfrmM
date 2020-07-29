const express = require('express');
const router = new express.Router();
const { Post } = require('./../models/post');
const authentication = require('../middleware/authentication');

router.post('/:id/:count', authentication, async (req, res) => {
  console.log(req.params.count);
  //   let updatedLearned;
  const post = Post.findById(req.params.id, function (err, doc) {
    doc.Learned = req.params.count;
    doc.save();
  });
  res.send({ success: true, count: req.params.count });
});

//localhost:3000/reactionsCount/5f1f7453f5b85148ac4f6b1c/1
http: module.exports = router;
