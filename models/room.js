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
      type: DataTypes.INTEGER,
      allowNull: false,
      PrimaryKey: true
    },
    // room_id: {
    //   type: DataTypes.NUMBER,
    //   allowNull: false
    // }
  },
  {
    sequelize
  }
);
module.exports = Room;

