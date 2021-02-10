const router = require('express').Router();

const healthcheckRoutes = require('./healthcheck');
const customerRoutes = require('./customers');
const specialistRoutes = require('./specialists');
const appointmentRoutes = require('./appointments');

router.use('/healthcheck', healthcheckRoutes);
router.use('/customers', customerRoutes);
router.use('/specialists', specialistRoutes);
router.use('/appointments', appointmentRoutes);

module.exports = router;
