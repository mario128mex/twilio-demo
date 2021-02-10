const AppointmentModel = require('../../models/Appointment');

module.exports = params => AppointmentModel.find(params);
