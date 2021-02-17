const {addSmsToQueue} = require('../services/azure-queue-storage');
const {azure: {incomingSmsQueue}} = require('../../config');
const log = require('../../logging');

module.exports = (params) => {
  const {
    customerFullName,
    specialistFullName,
    appointmentDateTime,
    customerPhone,
  } = params;

  const to = customerPhone;
  const message = `Hello ${customerFullName}\n` +
  `${specialistFullName} has scheduled your appointment at ${appointmentDateTime}\n` +
  `please answer with yes or no if you plan to attend.\n` +
  `Thank you!`;

  log.info(`message sent to ${incomingSmsQueue} queue`);
  addSmsToQueue(message, to);
};
