const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');

class Visitor extends Model {}
Visitor.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.NUMBER,
      allowNull: false,
    }
  },
  {
    sequelize
  }
);
module.exports = Visitor;
