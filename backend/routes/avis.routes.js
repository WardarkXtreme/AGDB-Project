const express = require("express");
const router = express.Router();
const avisCtrl = require('../controllers/avis.controller');
const authPrivilege = require('../middlewares/admin.middleware');
const auth = require('../middlewares/user.middleware');
router.get("/", avisCtrl.avis);
router.post("/add", auth, avisCtrl.addAvis);
router.delete("/del", authPrivilege, avisCtrl.delAvis);

module.exports = router; 