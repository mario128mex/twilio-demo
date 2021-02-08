const appConfig = {
  port: process.env.PORT || 3000
};

const dbConfig = {
  mongoUrl: process.env.MONGO_URL || 'mongodb://localhost:27017/twilio-demo'
}

module.exports = {
  appConfig,
  dbConfig
};
