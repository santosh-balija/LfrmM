const express = require('express');
const router = new express.Router();
const { Interests } = require('./../models/Interests');

router.get('/', async (req, res) => {
  const interests = await Interests.find({});
  res.json({ interests: interests });
});

module.exports = router;
