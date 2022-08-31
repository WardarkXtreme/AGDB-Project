const express = require("express");
const router = express.Router();
const ctCtrl = require('../controllers/contact.controller');
const ctMdlw = require('../middlewares/contact.middleware');

router.post("/", ctMdlw, ctCtrl.sendContact);

module.exports = router;