const Sequelize = require('sequelize');

require('dotenv').config();


/* const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      port: 3001
    },() => {
      console.log("Database conection")
    });

module.exports = sequelize; */


const sequelize = 
  
  new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      port: 3001
    },() => {
      console.log("Database conection")
    });

module.exports = sequelize;