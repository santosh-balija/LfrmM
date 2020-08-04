const mongoose = require('mongoose');
const validator = require('validator');

// Schema to store the user reactions to a post
const PostReactionsSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.Number,
    required: true,
    ref: 'User',
  },
  post: {
    type: mongoose.Schema.Types.Number,
    required: true,
    ref: 'User',
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
  saved: {
    type: Boolean,
    default: false,
  },
});

const PostReactionsSchema = mongoose.model(
  'PostReactions',
  PostReactionsSchema
);

exports.Comments = Comments;
