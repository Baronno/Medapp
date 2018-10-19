var Patient = require('./patient');

module.exports = function(id, doctorid, name, age, phone, description, email) {
    var mongoose = require('mongoose');

    mongoose.connect('mongodb://localhost:27017/Medapp', { useNewUrlParser: true });

    var patient = new Patient({ id : id, doctorid : doctorid, name : name, age : age, phone : phone, description : description, email : email });

    patient.save(function (err) {
      if (err) { throw err; }
      console.log('patient added');
      mongoose.connection.close();
    });
}
