const ModelInvoice = require('../models/invoice');
const dbConnect = require('../connect/Connect_db.js');
require('dotenv').config();
const fs = require('fs');
const PDFDocument = require('pdfkit');


exports.invoice = (req, res, err) => {
    
    function generateHeader(doc) {
       
        doc.image('./invoice/utils/logo.png', 50, 50, { width: 70 })
            .fillColor('#444444')
            
            .fontSize(20)
            .text('Au Gite Du Bois', 100, 50, { align: 'right' })

            .fontSize(18)
            .text('Client', 50, 140, { align: 'left', underline: true })
            .text('Réservation', 50, 235, { align: 'left', underline: true })
            .text('Détails', 50, 385, { align: 'left', underline: true })            
            // Invoice Information invoice PDF
            .text(`${"Facture numéro :" + "  " + req.body.numberInvoice}`, 180, 85, { align: 'right' })
            .text(`${"fait le :" + "  " + req.body.dateInit}`, 180, 100, { align: 'right' })
            .text(`${"total payé :" + "  " + req.body.totalPaid + ' €'}`, 180, 100, { align: 'right' })

            // Identity Information invoice PDF
            .fontSize(10)
            .text(`${"Prénom : " + "  " + req.body.name}`, 50, 170, { align: 'left' })
            .text(`${"Nom de famille :" + "  " + req.body.lastName}`, 50, 185, { align: 'left' })
            .text(`${"Numéro Tel :" + "  " + req.body.mobile}`, 50, 200, { align: 'left' })
            .text(`${"@mail :" + "  " + req.body.email}`, 250, 170, { align: 'left' })
            .text(`${"Addresse :" + "  " + req.body.address}`,250, 185, { align: 'left' })
            .text(`${"Ville :" + "  " + req.body.city}`, 250, 200, { align: 'left' })
            .text(`${"state :" + "  " + req.body.state}`, 430, 170, { align: 'left' })
            .text(`${"country :" + "  " + req.body.country}`, 430, 185, { align: 'left' })
            .text(`${"Code postal :" + "  " + req.body.postalCode}`, 430, 200, { align: 'left' })
            // Reservation Information Infoice PDF
            .text(`${"Arrivée :" + "  " + req.body.dateStart}`, 50, 265, {width: '200', align: 'justify', underline: true })
            .text(`${"Départ :" + "  " + req.body.dateEnd}`, 50, 280, {width: '200', align: 'justify', underline: true })
            .text(`${"Nombre de personne" + "  " + req.body.nbPeople}`, 50, 295, {width: '200', align: 'justify' })
            .text(`${"Nombre d'adulte :" + "  " + req.body.nbAdult}`, 50, 310, {width: '200', align: 'justify' })
            .text(`${"Nombre d'enfant :" + "  " + req.body.nbChild}`, 50, 325, {width: '200', align: 'justify' })
            .text(`${"Nombre de nuits hors week-end :" + "  " + req.body.nbNightNoWD}`, 50, 340, {width: '200', align: 'justify' })
            .text(`${"Nombre de nuits en week-end :" + "  " + req.body.nbNightWD}`, 50, 355, {width: '200', align: 'justify' })
            .text(`${"Tarif nuitée hors week-end :" + "  " + req.body.priceNightNoWD + ' €'}`, 50, 265, { align: 'right' })
            .text(`${"Tarif nuitée en week-end      :" + "  " + req.body.priceNightWD + ' €'}`, 50, 280, { align: 'right' })
            // Taxe Information Invoi29e PDF
            .text(`${"Taxe de séjour par nuit et par adulte :" + "  " + req.body.taxeVisitoryByNightByAdult + ' €'}`, 50, 415, { align: 'left' })
            .text(`${"Taux TVA prestations :" + "  " + req.body.serviceTaxeValue + ' %'}`, 50, 430, { align: 'left' })
            .text(`${"Taux TVA location:" + "  " + req.body.taxeValue + ' %'}`, 50, 445, { align: 'left' })
            // Paided Info Invoice PDF
            .text(`${"Montant prestation HT:" + "  " + req.body.priceServiceTaxeValueHT + ' €'}`, 50, 340, { align: 'right' })
            .text(`${"Montant prestation TTC:" + "  " + req.body.priceServiceTaxeValueTTC + ' €'}`, 50, 355, { align: 'right' })
            .text(`${"Total HT :" + "  " + req.body.totalHT + ' €'}`, 180, 390, { align: 'right' })
            .text(`${"Montant TVA location :" + "  " + req.body.priceTaxeValue + ' €'}`, 180, 80, { align: 'right' })
            .text(`${"Montant TVA services :" + "  " + req.body.priceTaxeVisitoryByAdultByNight + ' €'}`, 180, 80, { align: 'right' })
            .text(`${"Total TTC :" + "  " + req.body.totalPaid + ' €'}`, 180, 80, { align: 'right' })
            .text(`${"Offre exeptionnelle :" + "  " + req.body.specialDiscount + ' %'}`, 180, 80, { align: 'right' })
            .text(`${"Total TTC aprés remise :" + "  " + req.body.totalBeforeSpecialDiscount + ' €'}`, 180, 80, { align: 'right' })
                
           
            // const invoiceRemodel = new ModelInvoice({
            //  
            //     taxeInformation: {
            //          taxeVisitoryByNightByAdult: req.body.taxeVisitoryByNightByAdult,
            //          totalHT: req.body.totalHT,
            //          taxeValue: req.body.taxeValue,
            //          priceTaxeValue: req.body.priceTaxeValue,
            //          specialDiscount: req.body.specialDiscount,
            //          totalBeforeSpecialDiscount: req.body.totalBeforeSpecialDiscount,
            //          serviceTaxeValue: req.body.serviceTaxeValue,
            //          priceServiceTaxeValueHT: req.body.priceServiceTaxeValueHT,
            //          priceServiceTaxeValueTTC: req.body.priceServiceTaxeValueTTC,                
            //          totalPaid: req.body.totalPaid,
            //     }
            // });
            .moveDown()
            ;
        }
    function generateFooter(doc) {
        doc.fontSize(
            10,
        ).text(
            'Payment is due within 15 days. Thank you for your business.',
            50,
            780,
            { align: 'center', width: 500 },
        );
    }
    function createInvoice(invoice, path) {
        let doc = new PDFDocument({ size: 'A4' });
    
        generateHeader(doc); 
        generateFooter(doc); 
        doc.end();
        doc.pipe(fs.createWriteStream(path));
    }
    
    let generateName = Math.floor(Math.random() * 2)
    let convName = generateName.toString()
    createInvoice(req, `${'./invoice/'+convName+ ".pdf"}`)
    if(err) {
        console.log(err)
        return res.status(400).json({err});
        
    }
    else{
        return res.status(200).json({message: "envoyé avec succés !"})
    }  
    
};

