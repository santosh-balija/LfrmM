const mongoose = require('mongoose');
autoIncrement = require('mongoose-auto-increment');

// Schema for subComments
const SubCommentsSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.Number,
    required: true,
    ref: 'User',
  },
  subComment: {
    type: String,
    required: true,
  },
  blocked: {
    type: Boolean,
    default: false,
  },
  date: Date,
});
SubCommentsSchema.plugin(autoIncrement.plugin, 'SubComments');
const SubComments = mongoose.model('Comments', SubCommentsSchema);

exports.SubComments = SubComments;
