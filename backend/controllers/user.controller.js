const nodemailer = require('nodemailer');
const path = require('path');
const hbs = require('nodemailer-express-handlebars');
const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dbConnect = require('../connect/Connect_db.js');
require('dotenv').config();

const rdmc = process.env.RDMC;

function generateString(length) {
    let result = '';
    const rdmcLength = rdmc.length;
    for ( let i = 0; i < length; i++ ) {
        result += rdmc.charAt(Math.floor(Math.random() * rdmcLength));
    }
    return result;
};

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.MDPEMAIL
    }
});

const handlebarsOption = {
    viewEngine: {
        extName: ".handlebars",
        partialSdir: path.resolve('./views'),
        defaultLayout: false,
    },
    viewPath: path.resolve('./views'),
    extName: ".handlebars",
}

transporter.use('compile', hbs(handlebarsOption));

exports.signup = (req, res) => {

    const stkmdp = generateString(15);

    const mailOptions = {
        from: process.env.EMAIL,
        to: req.body.email,
        subject: 'AuGiteDuBois(NoReply)',
        template: 'email',
        context: {
            email: req.body.email,
            pass: stkmdp
        }
       
    };

    transporter.sendMail(mailOptions, function (err, info) {
        if(err) {
            return res.statut(400).json({err});
        }
        else {
            bcrypt.hash(stkmdp, 10)
            .then(hash => {
                const user = new User({
                    name: req.body.name,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    password: hash
                });
                let sql = `INSERT INTO users (name, lastName, email, password) VALUES (?)`;
                let values = [user.name, user.lastName, user.email, user.password];
                dbConnect.query(sql, [values], function(err, data) {
                    if (err) {
                        return res.status(400).json({err});
                    }
                    res.status(200).json({message: 'Utilisateur créé avec succés !'})
                });
            })
            .catch(err => res.status(500).json({err}));
        }    
    });
};

exports.login = (req, res) => {

    let sql = `SELECT * FROM users WHERE email = ?`;
    dbConnect.query(sql, [req.body.email], function(err, data) {
        if (err) {
            return res.status(400).json({err}); 
        } 
        bcrypt.compare(req.body.password, data[0].password)
            .then(valid => {
                if(!valid) {
                    return res.status(401).json({error: "Mot de passe incorrect"});
                }
                res.status(200).json({
                    id: data[0].id,
                    name: data[0].name,
                    lastName: data[0].lastName 
                })
            })
            .catch(error => res.status(500).json({error}));  
    });
};
