const AppointmentModel = require('../../models/Appointment');

module.exports = params => {
  const appointment = new AppointmentModel(params);
  return appointment.save();
};
