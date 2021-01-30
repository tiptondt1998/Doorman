const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Nurse extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}
Nurse.init(
    {
        username: {
          type: DataTypes.STRING,
          allowNull: false
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [5]
          }
        },
        employee_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        }
      },
      {
        hooks: {
        
          async beforeCreate(newNurseData) {
            newNurseData.password = await bcrypt.hash(newNurseData.password, 10);
            return newNurseData;
          },
          async beforeUpdate(updatedNurseData) {
            updatedNurseData.password = await bcrypt.hash(updatedNurseData.password, 10);
            return updatedNurseData;
          }
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'nurse'
      }
    );