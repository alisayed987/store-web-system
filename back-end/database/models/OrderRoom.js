'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderRoom extends Model {
    static associate(models) {
      this.belongsTo(models.Room)
      this.belongsTo(models.Order)
    }
  }
  OrderRoom.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    order_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "orders",
            key: "id"
        }
    },
    room_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "rooms",
            key: "id"
        }
    }
  }, {
    sequelize,
    modelName: 'OrderRoom',
    tableName: 'order_rooms',
    underscored: true
  });
  return OrderRoom;
};