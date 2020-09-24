const express = require('express');
const patients = express.Router();

const Patient = require('../models/mypatients');
//general list of patients
patients.get('/', (req, res) => {
	Patient.find()
	.then(Patient => res.json(Patient));
});
//particular patient info
patients.get('/find/:id', (req, res) => {
	Patient.findOne({ email : req.params.id})
	.then(user => {
    res.json(user)
  })
	.catch(err => res.json({success: false}));
});
module.exports = patients
