const sequelize = require('../config/connection');
const room = require('./room');
const { DataTypes } = require('sequelize/types');

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
      type: DataTypes.STRING,
      allowNull: false,
    },
    roomNumber: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    covidPositive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    finalVisit: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    patient_id: {
      type: DataTypes.NUMBER,
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'Patient',
  }
);
module.exports = Patient;
