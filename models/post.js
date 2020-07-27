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
});

const Post = mongoose.model('Post', PostSchema);

exports.Post = Post;
