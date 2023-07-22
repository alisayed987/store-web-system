'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.order)
      this.hasOne(models.item)
    }
  }
  OrderItem.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    order_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "orders",
            key: "id"
        }
    },
    item_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "items",
            key: "id"
        }
    },
    room_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: "rooms",
            key: "id"
        }
    },
    new_dimentions: {
        type: DataTypes.JSON,
        allowNull: true
    },
    color: {
        type: DataTypes.JSON,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
        min: 0
    },
    discount: {
        type: DataTypes.FLOAT,
        allowNull: true,
        defaultValue: 0,
        min: 0
    }
  }, {
    sequelize,
    modelName: 'OrderItem',
  });
  return OrderItem;
};