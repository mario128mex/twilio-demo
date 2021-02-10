const AppointmentModel = require('../../models/Appointment');

module.exports = (id) => AppointmentModel.findByIdAndDelete(id);
