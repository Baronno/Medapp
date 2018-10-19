var mongoose = require('mongoose');

var patientSchema = new mongoose.Schema({
  id : Number,
  doctorid : Number,
  name : String,
  age : Number,
  phone : String,
  description : String,
  email : String
});

module.exports = mongoose.model('patient', patientSchema);
