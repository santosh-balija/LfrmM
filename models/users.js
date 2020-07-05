const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const Joi = require('Joi');

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
  interests: [
    {
      type: Number,
      ref: 'Interests',
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
const User = mongoose.model('User', UserSchema);

// function validateUser(user){
//     const schema = {
//         name: Joi.string().min(3).max(25).required(),
//         email: Joi.string().min(8).max(255).required().email(),
//         password: Joi.string().min(8).max(255).required(),
//         isAdmin: Joi.boolean()
//     }
//     return Joi.validate(user, schema);
// }

exports.User = User;
// exports.validateUser = validateUser;
