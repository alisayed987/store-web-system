'use strict';
const {
  Model
} = require('sequelize');
const OrderModel = require('./order');

module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    static associate(models) {
      this.hasMany(models.Order)
    }
  }
  Customer.init({
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
    }
  }, {
    sequelize,
    modelName: 'Customer',
    underscored: true
  });
  return Customer;
};