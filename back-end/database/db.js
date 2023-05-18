const { Sequelize } = require('sequelize');
const config = require('../config.js')

//-----------< Create DB connection >------------------------------
const db = new Sequelize(config.db.database, config.db.user, config.db.password, {
  host: config.db.host,
  port: config.db.port,
  dialect: 'mysql'
});

db.authenticate()
  .then(()=>console.log('Connection has been established'))
  .catch((error)=> console.error('Unable to connect to the database:', error))

module.exports = db;