require('dotenv').config();
module.exports = {
    db: {
        host: "localhost",
        user: "root",
        password: process.env.DB_PASSWORD,
        database: "gana_furniture",
      },
}