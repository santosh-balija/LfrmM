const mongoose = require('mongoose');
const { bool } = require('joi');

const ReactionsCountSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Post',
  },
  Learned: {
    type: bool,
    default: false,
  },
  Appreciate: {
    type: bool,
    default: false,
  },
  Share: {
    type: bool,
    default: false,
  },
});

const ReactionsCount = mongoose.model('Post', ReactionsCountSchema);

exports.ReactionsCount = ReactionsCount;
