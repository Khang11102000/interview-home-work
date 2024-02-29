const router = require('express').Router();
const userCtrl = require('../controllers/userCtrl');

router.get('/getAll', userCtrl.getAll);
router.get('/getById:id', userCtrl.getById);

module.exports = router;
