const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');

class Room extends Model {}
Room.init(
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
    },
    room_id: {
      type: DataTypes.NUMBER,
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'Room',
  }
);
module.exports = Room;