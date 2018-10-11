var mongoose = require('mongoose');

var doctorSchema = new mongoose.Schema({
  id: Number,
  email: String,
  password: String,
  name: String,
  phone: String,
  specialty: String,
});

module.exports = mongoose.model('doctor', doctorSchema);
