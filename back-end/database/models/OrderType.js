'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderType extends Model {
    static associate(models) {
      this.hasMany(models.Order)
    }
  }
  OrderType.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'OrderType',
    tableName: 'order_types',
    underscored: true
  });
  return OrderType;
};