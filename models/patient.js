const sequelize = require('../config/connection');
const room = require('./room');
const { Model, DataTypes } = require('sequelize');

class Patient extends Model {}
Patient.init(
  {
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    roomNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    covidPositive: {
      type: DataTypes.STRING(255),
      default: false,
      allowNull: true,
    },
    finalVisit: {
        type: DataTypes.TEXT,
        allowNull: true
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