const AppointmentModel = require('../../models/Appointment');

module.exports = id => AppointmentModel.findById(id);
