const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');

class Visitor extends Model {}
Visitor.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Visitor',
  }
);
module.exports = Visitor;
