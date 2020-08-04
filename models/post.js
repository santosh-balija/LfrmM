const mongoose = require('mongoose');
const { bool } = require('joi');

// Schema for posts, who posted a post
const PostSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.Number,
    required: true,
    ref: 'User',
  },
  mistake: {
    type: String,
    trim: true,
  },
  learning: {
    type: String,
    trim: true,
    required: true,
  },
  saved: {
    type: Boolean,
    default: false,
  },
  viewed: {
    type: Boolean,
    default: false,
  },
  learnedCount: {
    type: Number,
    default: 0,
  },
  appreciateCount: {
    type: Number,
    default: 0,
  },
  shareCount: {
    type: Number,
    default: 0,
  },
  commentCount: {
    type: Number,
    default: 0,
  },
  learnedClicked: {
    type: Boolean,
    default: false,
  },
  appreciateClicked: {
    type: Boolean,
    default: false,
  },
  shareClicked: {
    type: Boolean,
    default: false,
  },
  loadMoreComments: {
    type: Boolean,
    default: false,
  },
  mainComments: [
    {
      type: mongoose.Schema.Types.Number,
      required: true,
      ref: 'Comments',
    },
  ],
  date: Date,
});

const Post = mongoose.model('Post', PostSchema);

exports.Post = Post;
