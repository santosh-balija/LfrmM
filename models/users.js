const mongoose = require('mongoose');
const validator = require('validator');
autoIncrement = require('mongoose-auto-increment');
const jwt = require('jsonwebtoken');
// The schema for the user
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    validate: {
      validator: function (v) {
        return validator.isEmail(v);
      },
      message: 'Invalid e-mail',
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 8,
  },
  fname: {
    type: String,
    required: true,
    trim: true,
    maxlength: 25,
  },
  lname: {
    type: String,
    required: true,
    trim: true,
    maxlength: 25,
  },
  designation: {
    type: String,
    required: true,
    trim: true,
  },
  institute: {
    type: String,
    required: true,
    trim: true,
  },
  interests: [
    {
      type: Number,
      ref: 'Interests',
    },
  ],
  followers: [
    {
      type: mongoose.Schema.Types.Number,
      ref: 'User',
    },
  ],
});

UserSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    { _id: this._id, email: this.email },
    'jwtSecretToken'
  );
  return token;
};
UserSchema.plugin(autoIncrement.plugin, 'User');
const User = mongoose.model('User', UserSchema);

exports.User = User;
