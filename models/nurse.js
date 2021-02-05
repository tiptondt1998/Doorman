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
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Nurse',
    timestamp: false,
    freezeTableName: true,
    underscored: true
  }
);

module.exports = Nurse;