const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PatientSchema = new Schema({
	name:{
		type: String,
		required: true
	},
	pet:{
		type: String,
		required: true	
	}
});

module.exports = Patients = mongoose.model('Patients', PatientSchema);