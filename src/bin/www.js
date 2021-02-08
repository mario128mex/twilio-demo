const http = require('http');
const app = require('../app');
const {appConfig} = require('../config');
const log = require('../logging');

const server = http.createServer(app);
const {port} = appConfig;

server.listen(port, () => {
  log.info(`Server is running on port ${port}`);
});
