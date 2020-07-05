const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/LfrmM')
  .then(() => {
    console.log('connected to database');
  })
  .catch(() => {
    console.log('failed connected to database');
  });

module.exports = mongoose;
