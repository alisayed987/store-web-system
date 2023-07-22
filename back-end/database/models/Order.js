'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.orderitem)
      this.belongsTo(models.ordertype)
      this.belongsTo(models.customer)
    }
  }
  Order.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    type_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "order_types",
            key: "id"
        }
    },
    customer_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "customers",
            key: "id"
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
  });
  return Order;
};