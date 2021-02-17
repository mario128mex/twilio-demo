const {QueueClient} = require('@azure/storage-queue');
const {storageConnectionString, incomingSmsQueue} = require('../../config').azure;

const addSmsToQueue = (message, phone) => {
  const queueClient = new QueueClient(storageConnectionString, incomingSmsQueue);

  // do not change the order of the params!
  const queueMessage = `${phone},${message}`;
  const base64QueueMessage = new Buffer.from(queueMessage).toString('base64');

  queueClient.sendMessage(base64QueueMessage);
};

module.exports = {
  addSmsToQueue
};
