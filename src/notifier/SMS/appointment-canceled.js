const { sendSms } = require('../services/twilio');
const log = require('../../logging');

module.exports = (params) => {
  const {
    customerFullName,
    specialistFullName,
    appointmentDateTime,
    specialistPhone,
  } = params;

  const message = `Hello ${specialistFullName}\n` +
    `${customerFullName} just cancelled his/her appointment scheduled at\n` +
    `${appointmentDateTime}\n. please get in contact with him/her to reschedule.\n` +
    `Have a good day!`;

  sendSms(message, specialistPhone)
    .then(message => {
      log.info('Message sent successfully');
      log.info(message);
    })
    .catch(err => log.error(err));
};
