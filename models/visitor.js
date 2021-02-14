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
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    roomNumber: {
      type: DataTypes.STRING,
      allowNull: true,
      foreignKey: true
    },
  },
  {
    sequelize,
    modelName: 'Visitor',
    timestamp: false,
    freezeTableName: true,
    underscored: true
  }
);

module.exports = Visitor;