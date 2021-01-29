const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');

class Screener extends Model {}
Screener.init(
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    employeeId: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Screener',
  }
);
module.exports = Screener;
