const router = require("express").Router();
const commentCtrl = require("../controllers/commentCtrl");

router.get("/getByPost:id", commentCtrl.getByPost);
router.get("/getAllByPost:id", commentCtrl.getAllByPost);

module.exports = router;
