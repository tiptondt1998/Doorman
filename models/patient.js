const sequelize = require('../config/connection');
const room = require('./room');
const { Model, DataTypes } = require('sequelize');

class Patient extends Model {}
Patient.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    roomNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    covidPositive: {
      type: DataTypes.STRING(255),

      default: false,
      allowNull: true,
    },
    finalVisit: {
        type: DataTypes.STRING,
        allowNull: false
    },
  },
  {
    
      sequelize,
      modelName: 'Patient',
      timestamp: false,
      freezeTableName: true,
      underscored: true
    
  }
);
module.exports = Patient;