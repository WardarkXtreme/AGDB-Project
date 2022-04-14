const express = require("express");
const router = express.Router();
const ctctCtrl = require('../controllers/contact.controller');

router.post("/", ctctCtrl.sendContact);

module.exports = router;