const { Sequelize } = require('sequelize');
const config = require('../config.js')

//-----------< Create DB connection >------------------------------
const sequilize = new Sequelize(config.db.database, config.db.user, config.db.password, {
  host: config.db.host,
  port: config.db.port,
  dialect: 'mysql'
});

sequilize.authenticate()
  .then(()=>console.log('Connection has been established'))
  .catch((error)=> console.error('Unable to connect to the database:', error))

module.exports = sequilize;