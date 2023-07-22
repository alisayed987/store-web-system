'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RolePermission extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RolePermission.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    role_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "roles",
            key: "id"
        }
    },
    permission_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "permissions",
            key: "id"
        }
    }
  }, {
    sequelize,
    modelName: 'RolePermission',
  });
  return RolePermission;
};