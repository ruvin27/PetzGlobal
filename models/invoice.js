const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InvoiceSchema = new Schema({
	name: {
		type : String,
		required : true
	},
	amt : {
		type : String,
		required : true
	}
});

module.exports = Invoice = mongoose.model('Invoice', InvoiceSchema);