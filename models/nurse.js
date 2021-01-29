const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');

class Nurse extends Model{
}
Nurse.init(
        {
            username: {
                type: DataTypes.STRING, 
                allowNull: false
            },
            employeeId: {
                type: DataTypes.NUMBER,
                allowNull: false
            },
            password: {
                type: DataTypes.TEXT,
                allowNull: false
            }    
            
        }
    );
module.exports = Nurse;
