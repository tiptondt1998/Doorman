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
<<<<<<< HEAD
module.exports = Room;
=======
module.exports = Room;

>>>>>>> 624d982e58e1fc9d8e1b3c7a2c5332d7466ca85f
