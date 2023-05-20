//***route facture
const express = require('express');
const router = express.Router();
const pdfService = require('../controllers/invoice');

router.post('/invoice', pdfService.invoice);

module.exports = router;

