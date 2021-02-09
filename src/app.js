const express = require('express');
const app = express();
const db = require('./db');
const API = require('./api');
const {setMiddleware} = require('./app.middleware');

// create db connection
db.createDbConnection();
let dbConnection = db.getDbConnection();
dbConnection.on('error', db.onError);
dbConnection.once('open', db.onSuccess);

// express middleware
setMiddleware(app);

// API configuration
app.use('/api/', API);

// additional routes
app.use('*', (req, res) => {
  res.status(404).send('Endpoint not found');
});

app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  } else {
    res.status(500).send('Something went wrong');
  }
});

module.exports = app;
