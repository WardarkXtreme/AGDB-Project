const express = require('express');
require('./connect/Connect_db.js');
const path = require('path');
const userRoutes = require('./routes/users.routes');
const avisRoutes = require('./routes/avis.routes');
const chbRoutes = require('./routes/chambres.route');
const gtRoutes = require('./routes/gite.routes');
const ctctRoutes = require('./routes/contact.route');
const bodyParser = require('body-parser');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(express.static('images'));
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use("/api/auth", userRoutes);
app.use("/api/avis", avisRoutes);
app.use("/api/chamber", chbRoutes);
app.use("/api/gite", gtRoutes);
app.use("/api/contact", ctctRoutes);

module.exports = app;