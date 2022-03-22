const express = require("express");
const router = express.Router();
const avisCtrl = require('../controllers/avis.controller');

router.post("/add", avisCtrl.addAvis);
router.delete("/del", avisCtrl.delAvis);

module.exports = router; 