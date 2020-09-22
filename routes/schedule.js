const express = require('express');
const scheduler = express.Router();

const Schedule = require('../models/schedule');

scheduler.get('/:id', (req,res) => {
    Schedule.find({doctorID : req.params.id})
    .then(appointments => res.json(appointments));
})

module.exports = scheduler
