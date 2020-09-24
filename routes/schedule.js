const express = require('express');
const scheduler = express.Router();

const Schedule = require('../models/schedule');
//find appointments of particular user
scheduler.get('/:id', (req,res) => {
    Schedule.find({doctorID : req.params.id})
    .then(appointments => res.json(appointments));
})

//find particular appointment
scheduler.get('/find/:id', (req,res) => {
    Schedule.find({_id : req.params.id})
    .then(appointments => res.json(appointments));
})

//update appointment
scheduler.patch('/update/:id', (req, res) => {
	Schedule.updateOne({ _id : req.params.id}, {$set: {userDate : req.body.userDate,  userTiming : req.body.userTiming}})
	.then(user => {
    res.json({success: true})
  })
	.catch(err => res.json({success: false}));
});

module.exports = scheduler
