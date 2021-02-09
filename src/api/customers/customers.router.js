const router = require('express').Router();

const customersController = require('./customers.controller');

router.post('/', customersController.post);
router.get('/', customersController.get);
router.get('/:id', customersController.getById);
router.put('/:id', customersController.update);
router.delete('/:id', customersController.remove);

module.exports = router;
