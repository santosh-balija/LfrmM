const mongoose = require('mongoose');

// Schema to store the posts reported by a user
const ReportedPostsSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.Number,
    required: true,
    ref: 'User',
  },
  posts: [
    {
      type: mongoose.Schema.Types.Number,
      required: true,
      ref: 'Post',
    },
    {
      date: Date,
    },
  ],
});

const ReportedPosts = mongoose.model('ReportedPosts', ReportedPostsSchema);

exports.ReportedPosts = ReportedPosts;
