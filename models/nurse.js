const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

class Nurse extends Model {
  validPassword = function(password) {
    console.log(password)
    const valid = bcrypt.compareSync(password, this.password)
    console.log(valid);
    console.log(this.password);
    return valid;
  }
}

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
      type: DataTypes.STRING,
      allowNull: false,
    },
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
    modelName: 'Nurse',
    timestamp: false,
    freezeTableName: true,
    underscored: true,
    tableName: 'Nurse'
  }
);

  /* Nurse.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password)
  } */
/*   Nurse.addHook("beforeCreate", (nurseType) => {
    nurseType.password = bcrypt.hashSync(nurseType.password, bcrypt.genSaltSync(10), null)
  });
 */


/* module.exports = function(sequelize, DataTypes) {
  // class Nurse extends Model {}}
const Nurse = sequelize.define("Nurse", {
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
    underscored: true,
    tableName: 'Nurse'
  });
  nurse.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password)
  }
  nurse.addHook("beforeCreate", (nurseType) => {
    nurseType.password = bcrypt.hashSync(nurseType.password, bcrypt.genSaltSync(10), null)
  })
  return nurse;
}; */

module.exports = Nurse;