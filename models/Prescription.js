const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PrescriptionSchema = new Schema({
	medicine:{
		type: String,
		required: true
	},
	dosage:{
		type: String,
		required: true	
	},
	duration:{
		type: String,
		required: true
	},
	strength:{
		type: String,
		required: true
	},
	date:{
		type:Date,
		default: Date.now
	}
});

module.exports = Prescription = mongoose.model('Prescriptions', PrescriptionSchema);