var Patient = require('./patient');

module.exports = function(id, name, age, mobile, description) {
    var mongoose = require('mongoose');

    mongoose.connect('mongodb://localhost:27017/Medapp', { useNewUrlParser: true });

    var patient = new Patient({ id : id, name : name, age : age, mobile : mobile, description : description });

    patient.save(function (err) {
      if (err) { throw err; }
      console.log('patient added');
      mongoose.connection.close();
    });
}
