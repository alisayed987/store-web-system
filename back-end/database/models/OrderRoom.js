'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderRoom extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.room)
      this.belongsTo(models.order)
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
  });
  return OrderRoom;
};