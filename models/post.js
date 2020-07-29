const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  mistake: {
    type: String,
  },
  learning: {
    type: String,
  },
  Learned: {
    type: Number,
    default: 0,
  },
  Appreciate: {
    type: Number,
    default: 0,
  },
  Share: {
    type: Number,
    default: 0,
  },
  date: Date,
});

const Post = mongoose.model('Post', PostSchema);

exports.Post = Post;
