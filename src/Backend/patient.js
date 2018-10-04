var mongoose = require('mongoose');

var patientSchema = new mongoose.Schema({
  id : Number,
  name : String,
  age : Number,
  mobile : Number,
  description : String
});

module.exports = mongoose.model('patient', patientSchema);
