const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');

class Screener extends Model {}
Screener.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize
  }
);
module.exports = Screener;

