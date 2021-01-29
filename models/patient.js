const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');
const room = require('./room');


class Patient extends room{
}
Patient.init(
        {
            name: {
                type: DataTypes.STRING, 
                allowNull: false
            },
            covidPositive: {
                type: DataTypes.BOOLEAN,
                allowNull: false
            },
            finalVisit: {
                type: DataTypes.BOOLEAN,
                allowNull: false
            }    
            
        }
    );
module.exports = nurse;
