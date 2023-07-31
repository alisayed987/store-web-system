'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ItemTag extends Model {
    static associate(models) {
      this.belongsTo(models.Tag)
      this.belongsTo(models.Item)
    }
  }
  ItemTag.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    item_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "items",
            key: "id"
        }
    },
    tag_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "tags",
            key: "id"
        }
    }
  }, {
    sequelize,
    modelName: 'ItemTag',
    tableName: 'item_tags',
    underscored: true
  });
  return ItemTag;
};