const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');


class Nurse extends Model {}
Nurse.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    employee_id: {
      type: DataTypes.NUMBER,
      allowNull: false,
    }
  },
  {
    sequelize,
    modelName: 'Nurse',
  }
);

module.exports = Nurse;