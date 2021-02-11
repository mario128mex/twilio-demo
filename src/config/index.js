const appConfig = {
  port: process.env.PORT || 3000
};

const dbConfig = {
  mongoUrl: process.env.MONGO_URL || 'mongodb://localhost:27017/twilio-demo'
};

// for security reasons, this values should be defined only as environment variables
const twilioConfig = {
  accountSid: process.env.TWILIO_ACCOUNT_SID,
  authToken: process.env.TWILIO_AUTH_TOKEN,
  twilioPhoneNumber: process.env.TWILIO_PHONE_NUMBER
};

const countryCodes = {
  USA: '+1',
  MEX: '+52'
};

module.exports = {
  appConfig,
  countryCodes,
  dbConfig,
  twilioConfig
};
