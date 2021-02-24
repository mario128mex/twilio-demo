const AppointmentModel = require('../../models/Appointment');

module.exports = params => new Promise((resolve, reject) => {
  AppointmentModel
    .find(params)
    .populate({ path: 'customer' })
    .populate({ path: 'specialist' })
    .exec(function (err, appointments) {
      if (err) reject(err);
      resolve(appointments);
    });
});
