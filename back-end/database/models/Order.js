'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      this.belongsToMany(models.Item, { through: models.OrderItem })
      this.belongsToMany(models.Room, {
        through: models.OrderRoom
      })
      this.belongsTo(models.OrderType)
      this.belongsTo(models.Customer)
    }
  }
  Order.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    order_type_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "order_types",
        key: "id",
        foreignKey: "type_id"
      }
    },
    customer_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "customers",
        key: "id",
        foreignKey: "customer_id"
      }
    },
    total_price: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    total_discount: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
      min: 0
    },
    delivery: {
      type: DataTypes.FLOAT,
      allowNull: false,
      min: 0
    }
  }, {
    sequelize,
    modelName: 'Order',
    underscored: true
  });
  return Order;
};