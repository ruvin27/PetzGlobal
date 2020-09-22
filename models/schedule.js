const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Appointment = new Schema({
    doctorID: {
        type: String
    },
    doctorName: {
        type: String
    },
    userID: {
        type: String
    },
    userName: {
      type: String
    },
    userReason: {
    type: String
    },
    userTiming: {
    type: String
    },
    userDate: {
    type: String
    },
    userTiming: {
    type: String
    },
    appointment_completed: {
      type: Boolean
    }
});

module.exports = mongoose.model('Appointment', Appointment);