const sequelize = require('../config/connection');
const room = require('./room');
const { DataTypes } = require('sequelize');

class Patient extends room {}
Patient.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.VARCHAR(255),
      allowNull: false,
    },
    roomNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
      /* references: {
        model: 'room',
        key: 'roomNumber'
      } */
    },
    covidPositive: {
      type: DataTypes.TINYINT,
      default: false,
      allowNull: true,
    },
    finalVisit: {
        type: DataTypes.TINYINT,
        allowNull: true
    },
    patient_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
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
