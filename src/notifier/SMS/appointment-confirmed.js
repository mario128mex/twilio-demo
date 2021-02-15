const {sendSms} = require('../services/twilio');
const log = require('../../logging');

module.exports = (params) => {
  const {
    customerFullName,
    specialistFullName,
    appointmentDateTime,
    specialistPhone,
  } = params;

  const message = `Hello ${specialistFullName}\n` +
    `${customerFullName} just confirmed his/her attendance to the appointment\n` +
    `scheduled at  ${appointmentDateTime}.\n` +
    `Have a good day!`;

  sendSms(message, specialistPhone)
    .then(message => {
      log.info('Message sent successfully');
      log.info(message);
    })
    .catch(err => log.error(err));
};
