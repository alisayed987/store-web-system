'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    static associate(models) {
      this.belongsToMany(models.Permission, { through: models.RolePermission })
      this.belongsToMany(models.User, { through: models.UserRole })
    }
  }
  Role.init({
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
    discription: {
        type: DataTypes.STRING,
        allowNull: true,
    }
  }, {
    sequelize,
    modelName: 'Role',
    underscored: true
  });
  return Role;
};