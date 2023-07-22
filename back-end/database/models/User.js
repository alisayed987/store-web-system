'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Test.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
          }
    },
    password: {
        type: DataTypes.STRING(64),
        allowNull: false,
    },
    role_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: "roles",
            key: "id"
        }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};