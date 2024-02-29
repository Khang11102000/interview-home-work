const router = require('express').Router();
const postCtrl = require('../controllers/postCtrl');

router.get('/getAll', postCtrl.getAll);
router.get('/getById:id', postCtrl.getById);
router.get('/getByTitle:title', postCtrl.getByTitle);

module.exports = router;
