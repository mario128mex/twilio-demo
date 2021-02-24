const AppointmentModel = require('../../models/Appointment');

module.exports = id => new Promise((resolve, reject) => {
  AppointmentModel
    .findById(id)
    .populate({ path: 'customer' })
    .populate({ path: 'specialist' })
    .exec(function (err, appointment) {
      if (err) reject(err);
      resolve(appointment);
    });
});
