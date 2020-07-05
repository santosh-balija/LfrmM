const mongoose = require('mongoose');
const validator = require('validator');

const CounterSchema = new mongoose.Schema({
  interest_name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 25,
  },
  id: {
    type: Number,
    required: true,
  },
});

db.counters.insert({
  _id: 'userid',
  seq: 0,
});
