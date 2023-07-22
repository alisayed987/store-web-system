'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.itemtag)
      this.belongsTo(models.category)
      this.belongsTo(models.room)
      this.belongsTo(models.orderitem)
    }
  }
  Item.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image_url: {
      type: DataTypes.STRING,
      allowNull: true
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "categories",
        key: "id"
      }
    },
    room_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "rooms",
        key: "id"
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dimentions: {
      type: DataTypes.JSON,
      allowNull: true
    },
    available_colors: {
      type: DataTypes.JSON,
      allowNull: true
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
    modelName: 'Item',
  });
  return Item;
};