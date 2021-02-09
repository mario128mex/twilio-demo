const router = require('express').Router();

const specialistsController = require('./specialists.controller');

router.post('/', specialistsController.post);
router.get('/', specialistsController.get);
router.get('/:id', specialistsController.getById);
router.put('/:id', specialistsController.update);
router.delete('/:id', specialistsController.remove);

module.exports = router;
