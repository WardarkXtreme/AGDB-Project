const express = require('express');
require('./connect/Connect_db.js');
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');
require('dotenv').config();
const userRoutes = require('./route/user.js');
const invoiceRoutes = require('./route/invoice.js');
const app = express();

// const avisRoutes = require('./routes/avis.routes');
// const ctctRoutes = require('./routes/contact.route');


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());
app.use(urlencoded({ extended: true}));

app.use("/api/auth", userRoutes);
app.use("/api/auth/post", invoiceRoutes);


// app.use("/api/contact", ctctRoutes);
module.exports = app;