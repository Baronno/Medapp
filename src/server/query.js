var Patient = require('./patient');

module.exports = function(id) {
    var mongoose = require('mongoose');

    mongoose.connect('mongodb://localhost:27017/Medapp', { useNewUrlParser: true });

    var query = Patient.find(null);
    query.where('id', id);
    //query.limit(3);
    query.exec(function (err, comms) {
      if (err) { throw err; }
      var comm;
      for (var i = 0, l = comms.length; i < l; i++) {
        comm = comms[i];
        console.log('------------------------------');
        console.log('id : ' + comm.id);
        console.log('name : ' + comm.name);
        console.log('age : ' + comm.age);
        console.log('mobile : ' + comm.mobile);
        console.log('description : ' + comm.description);
        console.log('------------------------------');
        mongoose.connection.close();
      }
    });
}
