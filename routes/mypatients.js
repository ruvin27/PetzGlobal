const express = require('express');
const patients = express.Router();

const Patient = require('../models/mypatients');

 patients.get('/', (req, res) => {
	Patient.find()
	.then(Patient => res.json(Patient));
});

module.exports = patients
