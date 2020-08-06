const mongoose = require('mongoose');
autoIncrement = require('mongoose-auto-increment');

mongoose
  .connect('mongodb://localhost/LfrmM', { useFindAndModify: false })
  .then(() => {
    console.log('connected to database');
  })
  .catch(() => {
    console.log('failed connected to database');
  });
autoIncrement.initialize(mongoose.connection);

module.exports = mongoose;
module.exports = autoIncrement;
