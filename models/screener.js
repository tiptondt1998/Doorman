const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');


class Screener extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}
Screener.init(
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
      },
      {
        hooks: {
        
          async beforeCreate(newScreenerData) {
            newScreenerData.password = await bcrypt.hash(newScreenerData.password, 10);
            return newScreenerData;
          },
          async beforeUpdate(updatedScreenerData) {
            updatedScreenerData.password = await bcrypt.hash(updatedScreenerData.password, 10);
            return updatedScreenerData;
          }
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'screen'
      }
    );

    module.exports = Screener;