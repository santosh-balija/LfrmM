const mongoose = require('mongoose');
const validator = require('validator');

const InterestsSchema = new mongoose.Schema({
  _id: Number,
  interest_name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 25,
  },
});

let Interests = mongoose.model('Interests', InterestsSchema);

const arr = [
  {
    _id: 1,
    interest_name: 'Coding',
  },
  {
    _id: 2,
    interest_name: 'Algorithms',
  },
  {
    _id: 3,
    interest_name: 'Web Development',
  },
  {
    _id: 4,
    interest_name: 'Machine Learning',
  },
  {
    _id: 5,
    interest_name: 'Cyber Security',
  },
  {
    _id: 6,
    interest_name: 'Cloud Computing',
  },
];
Interests.insertMany(arr, (error, docs) => {
  if (error) {
    console.log(error);
  }
});

exports.Interests = Interests;
