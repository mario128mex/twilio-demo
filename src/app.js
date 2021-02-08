const express = require('express');
const app = express();
const {setMiddleware} = require('./app.middleware');

setMiddleware(app);

module.exports = app;
