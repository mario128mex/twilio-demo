const http = require('http');

const app = require('../app');
const log = require('../logging');
const {appConfig} = require('../config');

const normalizePort = (port) => {
  const normalizedPort = parseInt(port, 10);

  if (isNaN(normalizedPort)) return port;
  if (normalizedPort >= 0) return normalizedPort;
  return false;
};

const onError = (error) => {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      log.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      log.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const onListening = () => {
  const address = server.address();
  const bind = typeof address === 'string' ?
    `pipe ${address}` :
    `port ${address.port}`;

  log.info(`Server is running on ${bind}`);
};

const port = normalizePort(appConfig.port);
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
