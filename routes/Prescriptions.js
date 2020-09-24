const express = require('express');
const prescribe = express.Router();

const Prescription = require('../models/Prescription');
//input new prescription
prescribe.post('/', (req, res) => {
     const P = new Prescription({
     	medicine: req.body.medicine,
		dosage: req.body.dosage,
		duration: req.body.duration,
		strength: req.body.strength
     }); 
     P.save().then(Prescription => res.json(Prescription));
       });
//get all prescriptions
prescribe.get('/', (req, res) => {
	Prescription.find()
	.sort({ date: -1 })
	.then(Prescription => res.json(Prescription));
});
//delete a prescription
prescribe.delete('/:id', (req, res) => {
	Prescription.findById(req.params.id)
	.then(Prescription => Prescription.remove().then(() => res.json({success: true})))
	.catch(err => res.json({success: false}));
});


module.exports = prescribe
