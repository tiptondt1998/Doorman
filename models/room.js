const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');

class Room extends Model{
}
Room.init(
        {
            roomNumber: {
                type: DataTypes.NUMBER,
                allowNull: false
            }    
            
        }
    );
module.exports = Room;
