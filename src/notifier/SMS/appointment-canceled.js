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
    `${customerFullName} just cancelled his/her appointment scheduled at\n` +
    `${appointmentDateTime}\n. please get in contact with him/her to reschedule.\n` +
    `Have a good day!`;

  log.info(`message sent to ${incomingSmsQueue} queue`);
  addSmsToQueue(message, specialistPhone);
};
