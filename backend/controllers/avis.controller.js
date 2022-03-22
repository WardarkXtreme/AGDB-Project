const dbConnect = require('../connect/Connect_db.js');
const Avis = require('../models/avis.model');

let date;
date = new Date();
let jma = date.toLocaleDateString().replace(/[/]/g, "-");
let hms = date.toLocaleTimeString()
date = (jma + " " + "à" + " " + hms);

exports.addAvis = (req, res) => {
    const avis = new Avis({
        name: req.body.name,
        lastName: req.body.lastName,
        comment: req.body.comment,
        note: req.body.note,
        date: date
    })
    let sql = `INSERT INTO avis (name, lastName, comment, note, date) VALUES (?)`;
    let values = [avis.name, avis.lastName, avis.comment, avis.note, avis.date];
    dbConnect.query(sql, [values], function (err, data) {
        if (err) {
            console.log({err})
            return res.status(400).json({err});
        }
        res.status(200).json({message: "Votre avis a bien été publié, Au Gite Du Bois vous remercie."})
    });
};

exports.delAvis = (req, res) => {
    let sql = `DELETE FROM avis WHERE idAvis = ?`;
    dbConnect.query(sql, [req.params.id], function (err, data) {
        if (err) {
            return res.status(400).json({err});
        }
        res.status(200).json({message: "Avis supprimé avec succés"});
    });
};