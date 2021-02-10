const router = require('express').Router();

const appointmentsController = require('./appointments.controller');

router.post('/', appointmentsController.post);
router.get('/', appointmentsController.get);
router.get('/:id', appointmentsController.getById);
router.put('/:id', appointmentsController.update);
router.delete('/:id', appointmentsController.remove);

module.exports = router;
