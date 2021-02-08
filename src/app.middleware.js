const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const swaggerUI = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');

const log = require('./logging');

log.info('Setting up API middleware');
const apiSpecPath = path.resolve(__dirname, '..', 'api-spec.yaml');
const swaggerDocument = YAML.load(apiSpecPath);

const setMiddleware = (app) => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded( {extended: false} ));
  app.use(cors());
  app.use('/api/specs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
  morgan.token('time', () => new Date().toISOString());
  app.use(morgan('[:time] :remote-addr :method :url :status :res[content-length] :response-time ms'));
};

module.exports = {
  setMiddleware
};
