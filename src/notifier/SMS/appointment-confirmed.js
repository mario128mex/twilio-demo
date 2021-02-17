const {addSmsToQueue} = require('../services/azure-queue-storage');
const {azure: {incomingSmsQueue}} = require('../../config');
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

  log.info(`message sent to ${incomingSmsQueue} queue`);
  addSmsToQueue(message, specialistPhone);
};
