const mongoose = require('mongoose');
// Schema to display the saved posts by the user
const SavedPostsSchema = new mongoose.Schema({
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

const SavedPosts = mongoose.model('SavedPosts', SavedPostsSchema);

exports.SavedPosts = SavedPosts;
