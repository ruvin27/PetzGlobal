const express = require('express');
const patients = express.Router();

const Patient = require('../models/mypatients');

 patients.get('/', (req, res) => {
	Patient.find()
	.then(Patient => res.json(Patient));
});

patients.get('/find/:id', (req, res) => {
	Patient.findOne({ email : req.params.id})
	.then(user => {
    res.json(user)
  })
	.catch(err => res.json({success: false}));
});
module.exports = patients
