'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RolePermission extends Model {
    static associate(models) {
      this.belongsTo(models.RolePermission)
      this.belongsTo(models.Permission)
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
    tableName: 'role_permissions',
    underscored: true
  });
  return RolePermission;
};