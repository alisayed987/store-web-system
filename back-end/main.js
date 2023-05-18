const express = require("express");
const app = express();
require('dotenv').config();

require('./database/db');

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
//----------------------------------------------------------------------------------
require("./database/models/DBModels");

//---------------------------------------------------------------------------------
app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

port = process.env.APP_PORT;
app.listen(port, () => {
    console.log(`Furniture store app listening at http://localhost:${port}`);
});