const express = require('express');
const app = express();
const {setMiddleware} = require('./app.middleware');
const db = require('./db');

// create db connection
db.createDbConnection();
let dbConnection = db.getDbConnection();
dbConnection.on('error', db.onError);
dbConnection.once('open', db.onSuccess);

setMiddleware(app);

module.exports = app;
