const sequelize = require('../config/connection');
const room = require('./room');

class Patient extends room {}
Patient.init(
  {
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
  },
  {
    sequelize,
    modelName: 'Patient',
  }
);
module.exports = Patient;
