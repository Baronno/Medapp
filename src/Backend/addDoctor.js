var Doctor = require('./doctor');

module.exports = function(id, email, password, name, phone, specialty) {
    var mongoose = require('mongoose');

    mongoose.connect('mongodb://localhost:27017/Medapp', { useNewUrlParser: true });

    var doctor = new Doctor({ id : id, email : email, password : password, name : name, phone : phone, specialty : specialty });

    doctor.save(function (err) {
      if (err) { throw err; }
      console.log('doctor added');
      mongoose.connection.close();
    });
}
