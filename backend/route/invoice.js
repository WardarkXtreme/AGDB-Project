//***route facture
const express = require('express');
const router = express.Router();
const pdfService = require('../controllers/invoice');
const paidAndInvoice = require('../middleware/invoiceAndPaidConfig');

router.post("/invoice", paidAndInvoice, pdfService.invoice);
// router.post("/invoice", paidAndInvoice);

module.exports = router;

