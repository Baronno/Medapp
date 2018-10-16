const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

var Patient = require('./patient');
var Doctor = require('./doctor');
var SendMail = require('./sendMail');

const { performance } = require('perf_hooks');

const app = express();

mongoose
  .connect(
    'mongodb://localhost:27017/Medapp', { useNewUrlParser: true }
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-Width, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  next();
});

app.post("/api/patient", (req, res, next) => {
  const patient = new Patient({
    id : req.body.id,
    doctorid : req.body.doctorid,
    name : req.body.name,
    age : req.body.age,
    phone : req.body.phone,
    description : 'new patient'
  });
  patient.save().then(createdPatient => {
    res.status(201).json({
      message: 'Patient added successfully',
      patientId: createdPatient._id
    });
  });
});

app.post("/api/doctor", (req, res, next) => {
  const doctor = new Datient({
    id : req.body.id,
    doctorid : req.body.doctorid,
    name : req.body.name,
    age : req.body.age,
    phone : req.body.phone,
    description : 'new doctor'
  });
  patient.save().then(createdDoctor => {
    res.status(201).json({
      message: 'Doctor added successfully',
      datientId: createdDoctor._id
    });
  });
});

app.get("/api/patients", (req, res, next) => {
  Patient.find().then(documents => {
    res.status(200).json({
      message: 'succes',
      patients: documents
    });
  });
});

app.get("/api/patient/:id", (req, res, next) => {
  const id = parseInt(req.params.id,10)
  Patient.findOne({id: id}).then(documents => {
    res.status(200).json({
      message: 'succes',
      patients: documents
    });
  });
});

app.get("/api/patients/:doctorid", (req, res, next) => {
  const doctorid = parseInt(req.params.doctorid,10)
  Patient.find({doctorid: doctorid}).then(documents => {
    res.status(200).json({
      message: 'succes',
      patients: documents
    });
  });
});

app.get("/api/maxid", (req, res, next) => {
  Patient.findOne().sort({id:-1}).then(documents => {
    res.status(200).json({
      message: 'succes',
      patient: documents
    });
  });
});

app.put("/api/patient/:id", (req, res, next) => {
  const id = parseInt(req.params.id,10)
  console.log('update : ');
  console.log(req.body.id);
  Patient.updateOne(
    { id : req.body.id},
    { $set: {
      'doctorid' : req.body.doctorid,
      'name' : req.bodyname,
      'age' : req.body.age,
      'mobile' : req.body.mobile,
      'description' : req.body.description
    }
  });
});

//SendMail.mailSend('huerta.fhm@gmail.com','this is a test2');

app.delete("/api/patient/:id", (req, res, next) => {
  const id = parseInt(req.params.id,10)
  Patient.findOne({id: id}).remove().exec();
});

app.get("/api/login/:email/:password", (req, res, next) => {
  const email = req.params.email;
  const password = req.params.password;
  const start = performance.now();
  Doctor.findOne({email:email, password:password}).then(documents => {
    res.status(200).json({
      message: true,
      loggedDoctor: documents=documents
      })
  });
  console.log(performance.now() - start);
});

app.post("/api/mail/:email/:mailbody", (req, res, next) => {
  const email = req.params.email;
  const mailbody = req.params.mailbody;
  SendMail.mailSend(email,mailbody).then(documents => {
    res.status(200).json({
      message: 'mail was sent'
    })
  });
  console.log("success");
});

app.get("/api/mail/:email", (req, res, next) => {
  const email = req.params.email;
  Doctor.find({email: email}).countDocuments()
  .then(documents => {
    console.log(documents);
    res.status(200).json({
      message: 'succes',
      number: documents
    })});
});

module.exports = app;
