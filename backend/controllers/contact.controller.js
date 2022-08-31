const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;
const hbs = require('nodemailer-express-handlebars');
const path = require('path');
require('dotenv').config();

const OAuth2_client = new OAuth2(process.env.CLIENT_ID, process.env.CLIENT_SECRET)
OAuth2_client.setCredentials( { refresh_token: process.env.REFRESH_TOKEN } )

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

exports.sendContact = (req, res) => {

    const mailOptions = {
        from: process.env.CONTACT_MAIL,
        to: "chantalchauvin@sfr.fr",
        subject: '(Reservation)AuGiteDuBois',
        template: 'contact',
        context: {
            lastName: req.body.lastName,
            firstName: req.body.firstName,
            email: req.body.email,
            numbersPeople: req.body.numbersPeople,
            numbersAdult: req.body.numbersAdult,
            numbersChild: req.body.numbersChild,
            dateStart: req.body.dateStart,
            dateEnd: req.body.dateEnd,
            message: req.body.message
        } 
    };
    transporter.sendMail(mailOptions, function (err, info) {
        if(err) {
            console.log(err)
            return res.status(400).json({err});

        }
        else{
            return res.status(200).json({message: "envoyé avec succés !"})
        }   
    });

}