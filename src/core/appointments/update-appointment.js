const AppointmentModel = require('../../models/Appointment');

module.exports = (id, data) => {
  return AppointmentModel.findByIdAndUpdate(id, data)
    .then(AppointmentModel.save)
    .then(() => AppointmentModel.findById(id));
};
