const router = require('express').Router();

const healthcheckRoutes = require('./healthcheck');
const customersRoutes = require('./customers');

router.use('/healthcheck', healthcheckRoutes);
router.use('/customers', customersRoutes);

module.exports = router;
