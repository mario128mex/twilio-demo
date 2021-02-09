const router = require('express').Router();

const healthcheckRoutes = require('./healthcheck');
const customersRoutes = require('./customers');
const specialistsRoutes = require('./specialists');

router.use('/healthcheck', healthcheckRoutes);
router.use('/customers', customersRoutes);
router.use('/specialists', specialistsRoutes);

module.exports = router;
