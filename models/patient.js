const sequelize = require('../config/connection');
const room = require('./room');
const { Model, DataTypes } = require('sequelize');

class Patient extends Model {}
Patient.init(
  {
    roomNumber: {
      type: DataTypes.INTEGER,
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
    /* visitor_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Visitor',
          key: 'id'
        }
    }, */
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