const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');

class Room extends Model {}
Room.init(
  {
    roomNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      PrimaryKey: true
    },
  },
  {
    sequelize
  }
);
module.exports = Room;