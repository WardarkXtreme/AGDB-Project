const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
const path = require('path');
require('dotenv').config();

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.CONTACT_MAIL,
        pass: process.env.MDPCONTACT
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
        to: req.body.email,
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