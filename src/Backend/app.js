const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

var Patient = require('./patient');

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
    "GET, POST, PATCH, DELETE, OPTIONS"
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
    description : req.body.description
  });
  res.status(201).json({
    message: 'Patient added successfully'
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
    console.log(documents);
    res.status(200).json({
      message: 'succes',
      patients: documents
    });
  });
});

app.get("/api/patients/:doctorid", (req, res, next) => {
  const doctorid = parseInt(req.params.doctorid,10)
  Patient.find({doctorid: doctorid}).then(documents => {
    console.log(documents);
    res.status(200).json({
      message: 'succes',
      patients: documents
    });
  });
});

module.exports = app;
