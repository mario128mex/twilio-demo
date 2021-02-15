const router = require('express').Router();

const appointmentsController = require('./appointments.controller');

router.post('/cancel', appointmentsController.cancelAppointment);
router.post('/confirm', appointmentsController.confirmAppointment);
router.delete('/:id', appointmentsController.remove);
router.get('/', appointmentsController.get);
router.get('/:id', appointmentsController.getById);
router.post('/', appointmentsController.post);
router.put('/:id', appointmentsController.update);

module.exports = router;
