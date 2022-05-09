const express = require("express");
const router = express.Router();
const avisCtrl = require('../controllers/avis.controller');

router.get("/", avisCtrl.avis);
router.post("/add", avisCtrl.addAvis);
router.delete("/del", avisCtrl.delAvis);

module.exports = router; 