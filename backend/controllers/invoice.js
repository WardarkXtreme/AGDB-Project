//***controlleur utilisateur */
const ModelInvoice = require('../models/invoice_post');
const dbConnect = require('../connect/Connect_db.js');
require('dotenv').config();
const fs = require('fs');
const PDFDocument = require('pdfkit');
const stripe = require('stripe')(`${process.env.TEST_CODE}`);

let getSaison = (req, res , err) => {
    let sql = `SELECT * FROM augiteduboisv2.table_saison`;
    if (err) {
        return res.status(400).send(new Error('Bad request!'));
    } 
    dbConnect.query(sql, function (err, data) {
        if (err) {
            return res.status(400).send(new Error('Bad request!'));
        } 
        res.status(200).json(data);
        console.log(data)
        // return res.status(201).json({ Id: 
        //     Id: req.body.Id
        // })
    })
};

// exports.invoice = (req, res, err) => {

//     const time = new Date().toISOString().split("T")[0]
    
//     function generateHeader(doc) {
       
//         doc.image('./invoice/utils/logo.png', 50, 30, { width: 110 })
//             .fillColor('#444444')
            
//             .fontSize(16)
//             .text('Au Gite Du Bois', 150, 50, { align: 'right' })

//             .fontSize(13)
//             .text('Client :', 50, 120, { align: 'left', underline: true })
//             .text('Réservation :', 330, 225, { align: 'left', underline: true })
//             .text('Détails :', 50, 225, { align: 'left', underline: true })  
//             .text('Adresse de facturation:', 330, 120, { align: 'left', underline: true })  
//             .fontSize(10)
//             // Invoice Information invoice PDF
//             .text(`${"Facture numéro :" + "  " + req.body.numberInvoice}`, 180, 70, { align: 'right' })
//             .text(`${"fait le :" + "  " + time}`, 180, 83, { align: 'right' })

//             // Identity Information invoice PDF
//             .text(`${req.body.name}`, 50, 135, { align: 'left' })
//             .text(`${req.body.lastName}`, 50, 150, { align: 'left' })
//             .text(`${req.body.mobile}`, 50, 165, { align: 'left' })
//             .text(`${req.body.email}`, 50, 180, { align: 'left' })
//             .text(`${"Nationalité :" + "  " + req.body.nationality}`,50, 195, { align: 'left' })
            
//             .text(`${req.body.address}`,330, 135, { align: 'left' })
//             .text(`${req.body.city}`, 330, 150, { align: 'left' })
//             .text(`${req.body.state}`, 330, 165, { align: 'left' })
//             .text(`${req.body.country}`, 330, 180, { align: 'left' })
//             .text(`${req.body.postalCode}`, 330, 195, { align: 'left' })
//             // Reservation Information Infoice PDF
//             .text(`${"Arrivée :" + "  " + req.body.dateStart}`, 330, 240, { align: 'left' })
//             .text(`${"Départ :" + "  " + req.body.dateEnd}`, 330, 260, { align: 'left' })
            
//             .text(`${"Nombre de personne" + "  " + req.body.nbPeople}`, 330, 280, { align: 'left' })
//             .text(`${"Nombre d'adulte :" + "  " + req.body.nbAdult}`, 330, 300, { align: 'left' })
//             .text(`${"Nombre d'enfant :" + "  " + req.body.nbChild}`, 330, 320, { align: 'left' })
            
//             .text(`${"Nombre de nuits hors week-end :" + "  " + req.body.nbNightNoWD}`, 330, 340, { align: 'left' })
//             .text(`${"Nombre de nuits en week-end :" + "  " + req.body.nbNightWD}`, 330, 360, { align: 'left' })
            
//             .text(`${"Groupe tarifaire:" + "  " + req.body.infoTarif}`, 50, 240, { align: 'left' })
//             .text(`${"Tarif nuitée hors week-end :" + "  " + req.body.priceNightNoWD + ' €'}`,  50, 260, { align: 'left' })
//             .text(`${"Tarif nuitée en week-end :" + "  " + req.body.priceNightWD + ' €'}`, 50, 280, { align: 'left' })
//             // Taxe Information Invoi29e PDF
//             .text(`${"Taxe de séjour par nuit et par adulte :" + "  " + req.body.nightAdultTaxeValue + ' €'}`, 50, 300, { align: 'left' })
//             .text(`${"Taux TVA location:" + "  " + req.body.locationTaxeValue + ' %'}`, 50, 320, { align: 'left' })
//             .text(`${"Taux TVA prestations :" + "  " + req.body.serviceTaxeValue + ' %'}`, 50, 340, { align: 'left' })
            
//             .text(`${"Montant taxe de séjour :" + "  " + req.body.priceNightAdultTaxe + ' €'}`, 50, 360, { align: 'left' })
//             .text(`${"Montant taxes prestation :" + "  " + req.body.priceServiceTaxe + ' €'}`, 50, 380, { align: 'left' })
//             .text(`${"Montant taxes location :" + "  " + req.body.priceLocationTaxe + ' €'}`, 50, 400, { align: 'left' })
//             // Paided Info Invoice PDF
//             .text(`${"Montant prestation HT:" + "  " + req.body.priceServiceTaxeValueHT + ' €'}`, 50, 420, { align: 'left' })
//             .text(`${"Montant prestation TTC:" + "  " + req.body.priceServiceTaxeValueTTC + ' €'}`, 50, 440, { align: 'left' })
//             .text(`${"Montant location HT:" + "  " + req.body.priceLocationTaxeValueHT + ' €'}`, 50, 460, { align: 'left' })
//             .text(`${"Montant location TTC:" + "  " + req.body.priceLocationTaxeValueTTC + ' €'}`, 50, 480, { align: 'left' })
            
//             .text(`${"Offre exeptionnelle :" + "  " + req.body.specialDiscountValue + ' %'}`, 50, 500, { align: 'left' })

//             .text(`${"Total HT avant remise :" + "  " + req.body.totalHTBeforeSpecialDiscount + ' €'}`, 50, 520, { align: 'left' })
//             .text(`${"Total HT aprés remise :" + "  " + req.body.totalHTAfterSpecialDiscount + ' €'}`, 50, 540, { align: 'left' })
//             .text(`${"Total TTC avant remise :" + "  " + req.body.totalTTCBeforeSpecialDiscount + ' €'}`, 50, 560, { align: 'left' })
//             .text(`${"Total TTC aprés remise :" + "  " + req.body.totalTTCAfterSpecialDiscount + ' €'}`, 50, 580, { align: 'left' })
            
//             .text(`${"Total HT :" + "  " + req.body.totalHT + ' €'}`, 50, 600, { align: 'left' })
//             .text(`${"Total TTC :" + "  " + req.body.total_ttc + ' €'}`, 50, 620, { align: 'left' })
                
           
//         }
//     function generateFooter(doc) {
//         doc.fontSize(8)
//         .text('Payment is due within 15 days. Thank you for your business.', 50, 750-75, { align: 'center', width: 500 },)
//         .text('4, rue Le Petit Andillou 50300 PONTS', 50, 750-60, { align: 'center' })
//         .text('06.01.02.85.35', 50, 750-45, { align: 'center' })
//         .text('contact@augitedubois.com', 50, 750-30, { align: 'center' })
//         .text('n° SIRET : 480 580 158 00024.', 50, 750-15, { align: 'center' })
//         .text('N.I.E(TVA) - FR95480580158', 50, 750, { align: 'center' })
//         .moveDown()
//         ;
//     }
//     function createInvoice(invoice, path) {
//         let doc = new PDFDocument({ size: 'A4' });
    
//         generateHeader(doc); 
//         generateFooter(doc); 
//         doc.end();
//         doc.pipe(fs.createWriteStream(path));
//     }
    
//     createInvoice(req, `${'./invoice/'+ req.body.numberInvoice + "_" + req.body.lastName + "_" + time + ".pdf"}`)
       
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
// };

