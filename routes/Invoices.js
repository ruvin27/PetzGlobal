const express = require('express');
const invoice = express.Router();

const invoiceSchema = require('../models/invoice');

invoice.get('/', (req, res) => {
	invoiceSchema.find()
	.sort( {date : -1 })
	.then(Invoice => res.json(Invoice))
});

module.exports = invoice