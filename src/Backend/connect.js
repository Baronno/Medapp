module.exports = function() {
    var mongoose = require('mongoose');

    mongoose.connect('mongodb://localhost:27017/Medapp', { useNewUrlParser: true })
    .then(() => {
      console.log('Connected to the database !');
    })
    .catch(() => {
      console.log('Connection failed !');
    });
