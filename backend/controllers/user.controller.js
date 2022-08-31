const nodemailer = require('nodemailer');
const path = require('path');
const hbs = require('nodemailer-express-handlebars');
const User = require('../models/user.model');
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dbConnect = require('../connect/Connect_db.js');
require('dotenv').config();

const rdmc = process.env.RDMC;

const OAuth2_client = new OAuth2(process.env.CLIENT_ID, process.env.CLIENT_SECRET)
OAuth2_client.setCredentials( { refresh_token: process.env.REFRESH_TOKEN } )

function generateString(length) {
    let result = '';
    const rdmcLength = rdmc.length;
    for ( let i = 0; i < length; i++ ) {
        result += rdmc.charAt(Math.floor(Math.random() * rdmcLength));
    }
    return result;
};

const accessToken = OAuth2_client.getAccessToken()
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: process.env.CONTACT_MAIL,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: accessToken
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
            return res.status(400).json({err});
        }
        else {
            bcrypt.hash(stkmdp, 10)
            .then(hash => {
                
                const user = new User({
                    name: req.body.name,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    password: hash,
                    role: 0
                });
                let sql = `INSERT INTO users (name, lastName, email, password, role) VALUES (?)`;
                let values = [user.name, user.lastName, user.email, user.password, user.role];
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
                    lastName: data[0].lastName,
                    role: data[0].role,
                    token: jwt.sign(
                        {id : data[0].id, lastName: data[0].lastName, name: data[0].name, role: data[0].role},
                        process.env.SECRET_T,
                        {expiresIn: "24h"}
                    )
                })
            })
            .catch(error => console.log(error));  
    });
};
// res.status(500).json({error})
exports.control= (req, res) => {
    let sql = `SELECT * FROM users WHERE id = ?`;
    dbConnect.query(sql, [req.body.id], function (err, data) {
        if(err){
            return res.status(400).json({err})
        }
        res.status(200).json({
            message : "access true"
        })
    });
};