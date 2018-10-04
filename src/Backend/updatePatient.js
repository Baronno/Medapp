var Patient = require('./patient');

module.exports = function(id, name, age, mobile, description) {
    var mongoose = require('mongoose');

    mongoose.connect('mongodb://localhost:27017/Medapp', { useNewUrlParser: true });

    Patient.updateOne(
      { id : id},
      { $set: { 'name' : name, 'age' : age, 'mobile' : mobile, 'description' : description } },
      function(err, doc) {
        if (err) { throw err; }
        console.log('patient updated');
        mongoose.connection.close();
      });
}
