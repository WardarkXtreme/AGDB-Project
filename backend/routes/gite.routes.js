const express = require('express');
const router = express.Router();
const giteCtrl = require('../controllers/gite.controller');

router.get("/", giteCtrl.getDataGite);


module.exports = router;