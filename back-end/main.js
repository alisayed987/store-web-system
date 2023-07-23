const express = require("express");
const app = express();
require('dotenv').config();

const db = require('./database/db');
require('./routes/routes')(app, db);


port = process.env.APP_PORT;
const server = app.listen(port, () => {
    console.log(`Furniture store app listening at http://localhost:${port}`);
});

module.exports = server;