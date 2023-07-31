'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    static associate(models) {
      this.belongsToMany(models.Tag, { through: models.ItemTag })
      this.belongsTo(models.Category)
      this.belongsToMany(models.Room, { through: models.RoomItem })
      this.belongsToMany(models.Order, { through: models.OrderItem })
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
    underscored: true
  });
  return Item;
};