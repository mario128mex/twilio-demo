const AppointmentModel = require('../../models/Appointment');
const getAppointmentById = require('./get-appointment-by-id');

module.exports = (id, data) => {
  return AppointmentModel.findByIdAndUpdate(id, data)
    .then(AppointmentModel.save)
    .then(() => getAppointmentById(id));
};
