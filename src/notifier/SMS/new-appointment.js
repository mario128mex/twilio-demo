const {sendSms} = require('../services/twilio');
const {countryCodes} = require('../../config');
const log = require('../../logging');

module.exports = (params) => {
  const {
    customerFullName,
    specialistFullName,
    appointmentDateTime,
    customerPhone,
    customerCountry
  } = params;

  const to = countryCodes[customerCountry] + customerPhone;
  const message = `Hello ${customerFullName}\n` +
  `${specialistFullName} has scheduled your appointment at ${appointmentDateTime}\n` +
  `please answer with yes or no if you plan to attend.\n` +
  `Thank you!`;

  console.log({countryCodes, customerCountry, to});

  sendSms(message, to)
    .then(message => {
      log.info('Message sent successfully');
      log.info(message);
    })
    .catch(err => log.error(err));
};
