//***controlleur utilisateur */
const ModelInvoice = require('../models/invoice_post');
const dbConnect = require('../connect/Connect_db.js');
require('dotenv').config();
const fs = require('fs');
const PDFDocument = require('pdfkit');
const stripe = require('stripe')(`${process.env.TEST_CODE}`);



exports.invoice = (req, res, err) => {
    // console.log(req.body)
    const time = new Date().toISOString().split("T")[0]
    
    function generateHeader(doc) {
        const euro = new Intl.NumberFormat('fr-FR', {
            style: 'currency',
            currency: 'EUR',
            minimumFractionDigits: 2
        });
        
        doc.image('./invoice/utils/logo.png', 40, 30, { width: 200 })
        .fillOpacity(0.4)
        .image('./invoice/utils/logo.png', 0, 500, { width: 500 })
        .fillOpacity(1)
        .fillColor('#707070')
        .rect(270, 50, 270, 75)
        .stroke()                           // draw a line
        .font('invoice/utils/segoe-ui-bold.otf')  
        .fontSize(24)
        .text('Au Gite Du Bois', 100, 55, { align: 'right' })
        .text('Au Gite Du Bois', 335, 650, { align: 'center' })
        .fontSize(68)
        .fillColor('#F1C7B2')
        .text(`${"00000,00" + "€"}`, 180, 185, { align: 'center'})
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
        .text("Fait le:", 210, 130, { align: 'center' })
        .text(`${req.body.date_init}`, 297, 130, { align: 'center' })
        .text("Date d'arrivée :", 270, 150, { align: 'left' })
        .text(`${"00-00-0000"}`, 337, 150, { align: 'left' })
        .text("Date de sortie :", 406, 150, { align: 'left' })
        .text(`${"00-00-0000"}`, 473, 150, { align: 'left' })
        .text("Nb personnes :", 279, 160, { align: 'left' })
        .text(`${"00"}`, 344, 160, { align: 'left' })
        .text("Nb d'adultes :", 361, 160, { align: 'left' })
        .text(`${"00"}`, 421, 160, { align: 'left' })
        .text("Nb d'enfants :", 440, 160, { align: 'left' })
        .text(`${"00"}`, 500, 160, { align: 'left' })
        .text("À l'attention de :", 50, 180, { align: 'left', underline: true})
        .text("Montant TTC payé", 180, 180, { align: 'center', underline: true})
        .text("Supplément", 50, 378, { align: 'left'})
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
        .text("Quantité", -110, 290, { align: 'center' })
        .text("Unité HT", -25, 290, { align: 'center' })
        .text("Total HT", 70, 290, { align: 'center' })
        .text("Taux TVA", 160, 290, { align: 'center' })
        .text("Unité TTC", 260, 290, { align: 'center' })
        .text("Prix TVA U", 350, 290, { align: 'center' })
        .text("Prix TVA", 440, 290, { align: 'center' })
        .fontSize(7.5)
        .fillColor('#EBAD8D')
        .font('invoice/utils/segoe-ui.otf') 
        .text("Nuitée hors week-end basse saison", 50, 305, { align: 'left' })
        .text(`${req.body.total_nb_night_no_wd_low_saison}`, -110, 305, { align: 'center' })
        .text(`${euro.format(req.body.info_tarif_night_no_wd_low_saison_ht/100)}`, -25, 305, { align: 'center' })
        // .text(`${euro.format(/100)}`, 70, 305, { align: 'center' })
        .text(`${"00" + "%"}`, 160, 305, { align: 'center' })
        .text(`${"0000,00" + "€"}`, 260, 305, { align: 'center' })
        .text(`${"0000,00" + "€"}`, 350, 305, { align: 'center' })
        .text(`${"0000,00" + "€"}`, 440, 305, { align: 'center' })
   
        .fillColor('#000000')
        .text("Nuitée en week-end basse saison", 50, 315, { align: 'left' })
        .text(`${"000"}`, -110, 315, { align: 'center' })
        .text(`${"0000,00" + "€"}`, -25, 315, { align: 'center' })
        .text(`${"0000,00" + "€"}`, 70, 315, { align: 'center' })
        .text(`${"00" + "%"}`, 160, 315, { align: 'center' })
        .text(`${"0000,00" + "€"}`, 260, 315, { align: 'center' })
        .text(`${"0000,00" + "€"}`, 350, 315, { align: 'center' })
        .text(`${"0000,00" + "€"}`, 440, 315, { align: 'center' })

        .fillColor('#EBAD8D')
        .text("Nuitée hors week-end moyenne saison", 50, 325, { align: 'left' })
        .text(`${"000"}`, -110, 325, { align: 'center' })
        .text(`${"0000,00" + "€"}`, -25, 325, { align: 'center' })
        .text(`${"0000,00" + "€"}`, 70, 325, { align: 'center' })
        .text(`${"00" + "%"}`, 160, 325, { align: 'center' })
        .text(`${"0000,00" + "€"}`, 260, 325, { align: 'center' })
        .text(`${"0000,00" + "€"}`, 350, 325, { align: 'center' })
        .text(`${"0000,00" + "€"}`, 440, 325, { align: 'center' })
        .fillColor('#000000')
        .text("Nuitée en week-end moyenne saison", 50, 335, { align: 'left' })
        .text(`${"000"}`, -110, 335, { align: 'center' })
        .text(`${"0000,00" + "€"}`, -25, 335, { align: 'center' })
        .text(`${"0000,00" + "€"}`, 70, 335, { align: 'center' })
        .text(`${"00" + "%"}`, 160, 335, { align: 'center' })
        .text(`${"0000,00" + "€"}`, 260, 335, { align: 'center' })
        .text(`${"0000,00" + "€"}`, 350, 335, { align: 'center' })
        .text(`${"0000,00" + "€"}`, 440, 335, { align: 'center' })
        .fillColor('#EBAD8D')
        .text("Nuitée hors week-end haute saison", 50, 345, { align: 'left' })
        .text(`${"000"}`, -110, 345, { align: 'center' })
        .text(`${"0000,00" + "€"}`, -25, 345, { align: 'center' })
        .text(`${"0000,00" + "€"}`, 70, 345, { align: 'center' })
        .text(`${"00" + "%"}`, 160, 345, { align: 'center' })
        .text(`${"0000,00" + "€"}`, 260, 345, { align: 'center' })
        .text(`${"0000,00" + "€"}`, 350, 345, { align: 'center' })
        .text(`${"0000,00" + "€"}`, 440, 345, { align: 'center' })
        .fillColor('#000000')
        .text("Nuitée en week-end haute saison", 50, 355, { align: 'left' })
        .text(`${"000"}`, -110, 355, { align: 'center' })
        .text(`${"0000,00" + "€"}`, -25, 355, { align: 'center' })
        .text(`${"0000,00" + "€"}`, 70, 355, { align: 'center' })
        .text(`${"00" + "%"}`, 160, 355, { align: 'center' })
        .text(`${"0000,00" + "€"}`, 260, 355, { align: 'center' })
        .text(`${"0000,00" + "€"}`, 350, 355, { align: 'center' })
        .text(`${"0000,00" + "€"}`, 440, 355, { align: 'center' })
        .fillColor('#EBAD8D')
        .text("Nuitée en jour férié", 50, 365, { align: 'left' })
        .text(`${"000"}`, -110, 365, { align: 'center' })
        .text(`${"0000,00" + "€"}`, -25, 365, { align: 'center' })
        .text(`${"0000,00" + "€"}`, 70, 365, { align: 'center' })
        .text(`${"00" + "%"}`, 160, 365, { align: 'center' })
        .text(`${"0000,00" + "€"}`, 260, 365, { align: 'center' })
        .text(`${"0000,00" + "€"}`, 350, 365, { align: 'center' })
        .text(`${"0000,00" + "€"}`, 440, 365, { align: 'center' })
        .fillColor('#000000')
        .text("Set de draps supplémentaires", 50, 390, { align: 'left' })
        .text(`${"000"}`, -110, 390, { align: 'center' })
        .text(`${"0000,00" + "€"}`, -25, 390, { align: 'center' })
        .text(`${"0000,00" + "€"}`, 70, 390, { align: 'center' })
        .text(`${"00" + "%"}`, 160, 390, { align: 'center' })
        .text(`${"0000,00" + "€"}`, 260, 390, { align: 'center' })
        .text(`${"0000,00" + "€"}`, 350, 390, { align: 'center' })
        .text(`${"0000,00" + "€"}`, 440, 390, { align: 'center' })
        .fillColor('#EBAD8D')
        .text("Ménage supplémentaire", 50, 405, { align: 'left' })
        .text(`${"000"}`, -110, 405, { align: 'center' })
        .text(`${"0000,00" + "€"}`, -25, 405, { align: 'center' })
        .text(`${"0000,00" + "€"}`, 70, 405, { align: 'center' })
        .text(`${"00" + "%"}`, 160, 405, { align: 'center' })
        .text(`${"0000,00" + "€"}`, 260, 405, { align: 'center' })
        .text(`${"0000,00" + "€"}`, 350, 405, { align: 'center' })
        .text(`${"0000,00" + "€"}`, 440, 405, { align: 'center' })
        .fontSize(4)
        .fillColor('#000000')
        .text("*Valeur multipliée par le nombre de sets multiplié par le nombre de semaines.", 50, 400, { align: 'left' })
        .fillColor('#EBAD8D')
        .text("*Valeur multipliée par le nombre de semaines.", 50, 415, { align: 'left' })
        .fillColor('#000000')
        .text("*taxe de séjours et Suppléments non inclue.", 50, 435, { align: 'left' })
        .fontSize(10)
        .font('invoice/utils/segoe-ui-bold.otf') 
        .text("Offre exclusive", 50, 440, { align: 'left' })
        .text("TEL-06.01.02.85.35", 350, 680, { align: 'center' })
        .text("SIRET:48058015800024", 350, 690, { align: 'center' })
        .text("N.I.E(TVA)-FR95480580158", 350, 700, { align: 'center' })
        .fillColor('#EBAD8D')
        .text("X9F-HJ2-J7X", 50, 455, { align: 'left' })
        .fontSize(32)
        .fillColor('#000000')
        .font('invoice/utils/segoe-ui-bold.otf') 
        .text(`${"62" + "%"}`, 125, 428, { align: 'left', underline: true })
        .fontSize(7.5)
        .font('invoice/utils/segoe-ui.otf') 
        .text("Prix total avant remise", 50, 475, { align: 'left' })
        .text(`${"000"}`, -110, 475, { align: 'center' })
        .text(`${"0000,00" + "€"}`, -25, 475, { align: 'center' })
        .text(`${"0000,00" + "€"}`, 70, 475, { align: 'center' })
        .text(`${"00" + "%"}`, 160, 475, { align: 'center' })
        .text(`${"0000,00" + "€"}`, 260, 475, { align: 'center' })
        .text(`${"0000,00" + "€"}`, 350, 475, { align: 'center' })
        .text(`${"0000,00" + "€"}`, 440, 475, { align: 'center' })
        .fillColor('#EBAD8D')
        .text("Prix total aprés remise", 50, 485, { align: 'left' })
        .text(`${"000"}`, -110, 485, { align: 'center' })
        .text(`${"0000,00" + "€"}`, -25, 485, { align: 'center' })
        .text(`${"0000,00" + "€"}`, 70, 485, { align: 'center' })
        .text(`${"00" + "%"}`, 160, 485, { align: 'center' })
        .text(`${"0000,00" + "€"}`, 260, 485, { align: 'center' })
        .text(`${"0000,00" + "€"}`, 350, 485, { align: 'center' })
        .text(`${"0000,00" + "€"}`, 440, 485, { align: 'center' })
        .fillColor('#000000')
        .font('invoice/utils/segoe-ui-bold.otf') 
        .fontSize(12)
        .text("Sous total", 120, 506, { align: 'left' })
        .fontSize(7.5)
        .text(`${"000"}`, -110, 510, { align: 'center' })
        .text(`${"0000,00" + "€"}`, -25, 510, { align: 'center' })
        .text(`${"0000,00" + "€"}`, 70, 510, { align: 'center' })
        .text(`${"00" + "%"}`, 160, 510, { align: 'center' })
        .text(`${"0000,00" + "€"}`, 260, 510, { align: 'center' })
        .text(`${"0000,00" + "€"}`, 350, 510, { align: 'center' })
        .text(`${"0000,00" + "€"}`, 440, 510, { align: 'center' })
        .fillColor('#EBAD8D')
        .fontSize(12)
        .text("Total Hors taxes", 120, 529, { align: 'left' })
        .fontSize(9)
        .text(`${"0000,00" + "€"}`, 30, 534, { align: 'center' })
        .fontSize(12)
        .text("Total TTC", 120, 546, { align: 'left' })
        .fontSize(9)
        .text(`${"0000,00" + "€"}`, 30, 548, { align: 'center' })
        .rect(48, 430, 150, 70).stroke() 
        .rect(118, 525, 200, 45).stroke() 
            

            
        
    }

    function createInvoice(invoice, path) {
        let doc = new PDFDocument({ size: 'A4' });
    
        generateHeader(doc); 
         
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

