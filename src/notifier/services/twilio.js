const twilio = require('twilio');
const {accountSid, authToken, twilioPhoneNumber} = require('../../config').twilioConfig;

const client = twilio(accountSid, authToken);

const sendSms = (message, to) => client.messages.create({
  body: message,
  from: twilioPhoneNumber,
  to
});

module.exports = {
  sendSms
};
