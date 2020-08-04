const mongoose = require('mongoose');
const validator = require('validator');
autoIncrement = require('mongoose-auto-increment');

// Schema for the comments
const CommentsSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.Number,
    required: true,
    ref: 'User',
  },
  subComments: [
    {
      type: mongoose.Schema.Types.Number,
      required: true,
      ref: 'SubComments',
    },
  ],
  comment: {
    type: String,
    required: true,
  },
  loadMoreSubComments: {
    type: Boolean,
    default: false,
  },
  blocked: {
    type: Boolean,
    default: false,
  },
  date: Date,
});
CommentsSchema.plugin(autoIncrement.plugin, 'Comments');
const Comments = mongoose.model('Comments', CommentsSchema);

exports.Comments = Comments;
