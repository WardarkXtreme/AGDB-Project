const express = require('express');
const router = express.Router();
const chambresCtrl = require('../controllers/chambres.controller');

router.get("/", chambresCtrl.getAllChamber);


module.exports = router;