var mongoose = require('mongoose');

var patientSchema = new mongoose.Schema({
  id : Number,
  name : String,
  age : Number,
  mobile : Number,
  description : String
});

var patientModel = mongoose.model('patient', patientSchema);

module.exports = patientModel;
