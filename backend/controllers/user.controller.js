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
    return result
    // generateString(15);
}

let date;
date = new Date();
let jma = date.toLocaleDateString().replace(/[/]/g, "-");
let hms = date.toLocaleTimeString()
date = (jma + " " + "à" + " " + hms);

exports.signup = (req, res) => {
    bcrypt.hash(generateString(15), 10)
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

