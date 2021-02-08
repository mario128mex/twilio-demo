const http = require('http');
const app = require('../app');
const {appConfig} = require('../config');

const server = http.createServer(app);
const {port} = appConfig;

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
