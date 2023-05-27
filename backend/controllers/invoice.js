//***controlleur utilisateur */
const ModelInvoice = require('../models/invoice_post');
const dbConnect = require('../connect/Connect_db.js');
require('dotenv').config();
const fs = require('fs');
const PDFDocument = require('pdfkit');
const stripe = require('stripe')(`${process.env.TEST_CODE}`);



exports.invoice = (req, res, err) => {
    
    const time = new Date().toISOString().split("T")[0]
    
    function generateHeader(doc) {
        
        doc.image('./invoice/utils/logo.png', 40, 30, { width: 200 })
        .fillColor('#707070')
        .rect(270, 50, 270, 75)
        .stroke()                           // draw a line
        .font('invoice/utils/segoe-ui-bold.otf')  
        .fontSize(24)
        .text('Au Gite Du Bois', 100, 55, { align: 'right' })
        .fontSize(68)
        .fillColor('#F1C7B2')
        .text(`${"00000,00" + "€"}`, 50, 185, { align: 'right'})
        .fontSize(8)
        .fillColor('#707070')
        .font('invoice/utils/segoe-ui.otf')  
        .text('4, rue Le Petit Andillou 50300 PONTS', 110, 85, { align: 'right' })
        .text('contact@augitedubois.com', 110, 95, { align: 'right' })
        .text('06.01.02.85.35', 110, 105, { align: 'right' })
        .fontSize(9)
        .font('invoice/utils/segoe-ui-bold.otf') 
        .text("Facture numéro :", 285, 105, { align: 'left' })
        .text(`${"000"}`, 370, 105, { align: 'left' })
        .text("Date d'arrivée :", 270, 130, { align: 'left' })
        .text(`${"00-00-0000"}`, 337, 130, { align: 'left' })
        .text("Date de sortie :", 406, 130, { align: 'left' })
        .text(`${"00-00-0000"}`, 473, 130, { align: 'left' })
        .text("Fait le:", 270, 150, { align: 'left' })
        .text(`${"00-00-0000"}`, 337, 150, { align: 'left' })
        .text("À l'attention de :", 50, 180, { align: 'left', underline: true})
        .text("Montant TTC payé :", 250, 180, { align: 'left', underline: true})
        .text("Supplément", 50, 380, { align: 'left'})
        .fontSize(8)
        .text(`${"Nom-composé"}`, 50, 196, { align: 'left' })
        .text(`${"Prénom-composé"}`, 110, 196, { align: 'left' })
        .text(`${"0000000000"}`, 50, 210, { align: 'left' })
        .text(`${"emailexemple@exemple.com"}`, 50, 220, { align: 'left' })
        .text(`${"410 Avenue des platanes"}`, 50, 230, { align: 'left' })
        .text(`${`${"France"}` + "," + `${"Saint-lô"}` + "," + `${"50000"}` }`, 50, 240, { align: 'left' })
        .fontSize(8)
        .font('invoice/utils/segoe-ui-bold.otf') 
        .text("Désignation", 50, 290, { align: 'left', underline: true})
        .text("Qté", 200, 290, { align: 'left' })
        .text("U HT", 230, 290, { align: 'left' })
        .text("Total HT", 255, 290, { align: 'left' })
        .text("Taux TVA", 305, 290, { align: 'left' })
        .text("Prix TVA U", 360, 290, { align: 'left' })
        .text("Prix TVA", 430, 290, { align: 'left' })
        .text("U TTC", 460, 290, { align: 'left' })
        .fontSize(7.5)
        .fillColor('#FF7D3A')
        .text("Nuitée hors week-end basse saison", 50, 305, { align: 'left' })
        .text(`${"00" + " U"}`, 100, 305, {width: 135, align: 'right' })
        .text(`${"0000,00" + " €"}`, 100, 305, {width: 175, align: 'right' })
        // .text(`${"00"}`, 285, 305, { align: 'right' })
        // .text(`${"00"}`, 335, 305, { align: 'right' })
        // .text(`${"00"}`, 390, 305, { align: 'right' })
        // .text(`${"00"}`, 450, 305, { align: 'right' })
        // .text(`${"00"}`, 495, 305, { align: 'right' })
        // .fillColor('#707070')
        // .text("Nuitée en week-end basse saison", 50, 315, { align: 'left' })
        // .text(`${"00"}`, 220, 315, { align: 'right' })
        // .text(`${"00"}`, 100, 315, { align: 'right' })
        // .text(`${"00"}`, 285, 315, { align: 'right' })
        // .text(`${"00"}`, 335, 315, { align: 'right' })
        // .text(`${"00"}`, 390, 315, { align: 'right' })
        // .text(`${"00"}`, 450, 315, { align: 'right' })
        // .text(`${"00"}`, 495, 315, { align: 'right' })
        // .fillColor('#FF7D3A')
        // .text("Nuitée hors week-end moyenne saison", 50, 325, { align: 'left' })
        // .text(`${"00"}`, 220, 325, { align: 'right' })
        // .text(`${"00"}`, 100, 325, { align: 'right' })
        // .text(`${"00"}`, 285, 325, { align: 'right' })
        // .text(`${"00"}`, 335, 325, { align: 'right' })
        // .text(`${"00"}`, 390, 325, { align: 'right' })
        // .text(`${"00"}`, 450, 325, { align: 'right' })
        // .text(`${"00"}`, 495, 325, { align: 'right' })
        // .fillColor('#707070')
        // .text("Nuitée en week-end moyenne saison", 50, 335, { align: 'left' })
        // .text(`${"00"}`, 220, 335, { align: 'right' })
        // .text(`${"00"}`, 100, 335, { align: 'right' })
        // .text(`${"00"}`, 285, 335, { align: 'right' })
        // .text(`${"00"}`, 335, 335, { align: 'right' })
        // .text(`${"00"}`, 390, 335, { align: 'right' })
        // .text(`${"00"}`, 450, 335, { align: 'right' })
        // .text(`${"00"}`, 495, 335, { align: 'right' })
        // .fillColor('#FF7D3A')
        // .text("Nuitée hors week-end haute saison", 50, 345, { align: 'left' })
        // .text(`${"00"}`, 220, 345, { align: 'right' })
        // .text(`${"00"}`, 100, 345, { align: 'right' })
        // .text(`${"00"}`, 285, 345, { align: 'right' })
        // .text(`${"00"}`, 335, 345, { align: 'right' })
        // .text(`${"00"}`, 390, 345, { align: 'right' })
        // .text(`${"00"}`, 450, 345, { align: 'right' })
        // .text(`${"00"}`, 495, 345, { align: 'right' })
        // .fillColor('#707070')
        // .text("Nuitée en week-end haute saison", 50, 355, { align: 'left' })
        // .text(`${"00"}`, 220, 355, { align: 'right' })
        // .text(`${"00"}`, 100, 355, { align: 'right' })
        // .text(`${"00"}`, 285, 355, { align: 'right' })
        // .text(`${"00"}`, 335, 355, { align: 'right' })
        // .text(`${"00"}`, 390, 355, { align: 'right' })
        // .text(`${"00"}`, 450, 355, { align: 'right' })
        // .text(`${"00"}`, 495, 355, { align: 'right' })
        // .fillColor('#FF7D3A')
        // .text("Nuitée en jour férié", 50, 365, { align: 'left' })
        // .text(`${"00"}`, 220, 365, { align: 'right' })
        // .text(`${"00"}`, 100, 365, { align: 'right' })
        // .text(`${"00"}`, 285, 365, { align: 'right' })
        // .text(`${"00"}`, 335, 365, { align: 'right' })
        // .text(`${"00"}`, 390, 365, { align: 'right' })
        // .text(`${"00"}`, 450, 365, { align: 'right' })
        // .text(`${"00"}`, 495, 365, { align: 'right' })
        // .fillColor('#707070')
        // .text("Set de draps supplémentaires", 50, 390, { align: 'left' })
        // .text(`${"00"}`, 220, 390, { align: 'right' })
        // .text(`${"00"}`, 100, 390, { align: 'right' })
        // .text(`${"00"}`, 285, 390, { align: 'right' })
        // .text(`${"00"}`, 335, 390, { align: 'right' })
        // .text(`${"00"}`, 390, 390, { align: 'right' })
        // .text(`${"00"}`, 450, 390, { align: 'right' })
        // .text(`${"00"}`, 495, 390, { align: 'right' })
        
        .fontSize(4)
        .rect(48, 450, 150, 65)
        .stroke()   
            
            //     .fontSize(13)
        //     .text('Client :', 50, 120, { align: 'left', underline: true })
        //     .text('Réservation :', 330, 225, { align: 'left', underline: true })
        //     .text('Détails :', 50, 225, { align: 'left', underline: true })  
        //     .text('Adresse de facturation:', 330, 120, { align: 'left', underline: true })  
        //     .fontSize(10)
        //     // Invoice Information invoice PDF
        //     .text(`${"Facture numéro :" + "  " + req.body.numberInvoice}`, 180, 70, { align: 'right' })
        //     .text(`${"fait le :" + "  " + time}`, 180, 83, { align: 'right' })

        //     // Identity Information invoice PDF
        //     .text(`${req.body.name}`, 50, 135, { align: 'left' })
        //     .text(`${req.body.lastName}`, 50, 150, { align: 'left' })
        //     .text(`${req.body.mobile}`, 50, 165, { align: 'left' })
        //     .text(`${req.body.email}`, 50, 180, { align: 'left' })
        //     .text(`${"Nationalité :" + "  " + req.body.nationality}`,50, 195, { align: 'left' })
            
        //     .text(`${req.body.address}`,330, 135, { align: 'left' })
        //     .text(`${req.body.city}`, 330, 150, { align: 'left' })
        //     .text(`${req.body.state}`, 330, 165, { align: 'left' })
        //     .text(`${req.body.country}`, 330, 180, { align: 'left' })
        //     .text(`${req.body.postalCode}`, 330, 195, { align: 'left' })
        //     // Reservation Information Infoice PDF
        //     .text(`${"Arrivée :" + "  " + req.body.dateStart}`, 330, 240, { align: 'left' })
        //     .text(`${"Départ :" + "  " + req.body.dateEnd}`, 330, 260, { align: 'left' })
            
        //     .text(`${"Nombre de personne" + "  " + req.body.nbPeople}`, 330, 280, { align: 'left' })
        //     .text(`${"Nombre d'adulte :" + "  " + req.body.nbAdult}`, 330, 300, { align: 'left' })
        //     .text(`${"Nombre d'enfant :" + "  " + req.body.nbChild}`, 330, 320, { align: 'left' })
            
        //     .text(`${"Nombre de nuits hors week-end :" + "  " + req.body.nbNightNoWD}`, 330, 340, { align: 'left' })
        //     .text(`${"Nombre de nuits en week-end :" + "  " + req.body.nbNightWD}`, 330, 360, { align: 'left' })
            
        //     .text(`${"Groupe tarifaire:" + "  " + req.body.infoTarif}`, 50, 240, { align: 'left' })
        //     .text(`${"Tarif nuitée hors week-end :" + "  " + req.body.priceNightNoWD + ' €'}`,  50, 260, { align: 'left' })
        //     .text(`${"Tarif nuitée en week-end :" + "  " + req.body.priceNightWD + ' €'}`, 50, 280, { align: 'left' })
        //     // Taxe Information Invoi29e PDF
        //     .text(`${"Taxe de séjour par nuit et par adulte :" + "  " + req.body.nightAdultTaxeValue + ' €'}`, 50, 300, { align: 'left' })
        //     .text(`${"Taux TVA location:" + "  " + req.body.locationTaxeValue + ' %'}`, 50, 320, { align: 'left' })
        //     .text(`${"Taux TVA prestations :" + "  " + req.body.serviceTaxeValue + ' %'}`, 50, 340, { align: 'left' })
            
        //     .text(`${"Montant taxe de séjour :" + "  " + req.body.priceNightAdultTaxe + ' €'}`, 50, 360, { align: 'left' })
        //     .text(`${"Montant taxes prestation :" + "  " + req.body.priceServiceTaxe + ' €'}`, 50, 380, { align: 'left' })
        //     .text(`${"Montant taxes location :" + "  " + req.body.priceLocationTaxe + ' €'}`, 50, 400, { align: 'left' })
        //     // Paided Info Invoice PDF
        //     .text(`${"Montant prestation HT:" + "  " + req.body.priceServiceTaxeValueHT + ' €'}`, 50, 420, { align: 'left' })
        //     .text(`${"Montant prestation TTC:" + "  " + req.body.priceServiceTaxeValueTTC + ' €'}`, 50, 440, { align: 'left' })
        //     .text(`${"Montant location HT:" + "  " + req.body.priceLocationTaxeValueHT + ' €'}`, 50, 460, { align: 'left' })
        //     .text(`${"Montant location TTC:" + "  " + req.body.priceLocationTaxeValueTTC + ' €'}`, 50, 480, { align: 'left' })
            
        //     .text(`${"Offre exeptionnelle :" + "  " + req.body.specialDiscountValue + ' %'}`, 50, 500, { align: 'left' })

        //     .text(`${"Total HT avant remise :" + "  " + req.body.totalHTBeforeSpecialDiscount + ' €'}`, 50, 520, { align: 'left' })
        //     .text(`${"Total HT aprés remise :" + "  " + req.body.totalHTAfterSpecialDiscount + ' €'}`, 50, 540, { align: 'left' })
        //     .text(`${"Total TTC avant remise :" + "  " + req.body.totalTTCBeforeSpecialDiscount + ' €'}`, 50, 560, { align: 'left' })
        //     .text(`${"Total TTC aprés remise :" + "  " + req.body.totalTTCAfterSpecialDiscount + ' €'}`, 50, 580, { align: 'left' })
            
        //     .text(`${"Total HT :" + "  " + req.body.totalHT + ' €'}`, 50, 600, { align: 'left' })
        //     .text(`${"Total TTC :" + "  " + req.body.total_ttc + ' €'}`, 50, 620, { align: 'left' })
                
           
    }
    function generateFooter(doc) {
        doc.fontSize(8)
        // .text('Payment is due within 15 days. Thank you for your business.', 50, 750-75, { align: 'center', width: 500 },)
        // .text('4, rue Le Petit Andillou 50300 PONTS', 50, 750-60, { align: 'center' })
        // .text('06.01.02.85.35', 50, 750-45, { align: 'center' })
        // .text('contact@augitedubois.com', 50, 750-30, { align: 'center' })
        // .text('n° SIRET : 480 580 158 00024.', 50, 750-15, { align: 'center' })
        // .text('N.I.E(TVA) - FR95480580158', 50, 750, { align: 'center' })
        .moveDown()
        ;
    }
    function createInvoice(invoice, path) {
        let doc = new PDFDocument({ size: 'A4' });
    
        generateHeader(doc); 
        generateFooter(doc); 
        doc.end();
        doc.pipe(fs.createWriteStream(path));
    }
    
    createInvoice(req, `${'./invoice/'+ req.body.numberInvoice + "_" + req.body.lastName + "_" + time + ".pdf"}`)
    res.status(200).json('good')
//     const invoice_baseModel = new ModelInvoice({
//         user_id: req.body.user_id,
//         total_ttc: req.body.total_ttc,
//         link_invoice: `${req.protocol}://${req.get('host')}/invoice/${req.body.numberInvoice + req.body.lastName + time + ".pdf"}`,
//         date_init: time
//     });
//     let sql = `INSERT INTO invoice (user_id, total_ttc, link_invoice, date_init) VALUES (?)`;
//     let values = [invoice_baseModel.user_id, invoice_baseModel.total_ttc, invoice_baseModel.link_invoice, invoice_baseModel.date_init];
//     dbConnect.query(sql, [values], function(err, data) {
//         if(err) {
//             return res.status(400).json({err, message: "Error for send Data in BDD invoice"});
//         }
//         res.status(200).json({message: "Generated invoice is succes !"});
// });
};

