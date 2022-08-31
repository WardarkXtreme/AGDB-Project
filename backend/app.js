const express = require('express');
require('./connect/Connect_db.js');
const path = require('path');
const userRoutes = require('./routes/users.routes');
const avisRoutes = require('./routes/avis.routes');
const ctctRoutes = require('./routes/contact.route');
const bodyParser = require('body-parser');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://augitedubois.com');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(express.static('images'));
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use("/api/auth", userRoutes);
app.use("/api/avis", avisRoutes);
app.use("/api/contact", ctctRoutes);

module.exports = app;