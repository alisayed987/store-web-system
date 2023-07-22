'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ItemTag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.tag)
      this.belongsTo(models.item)
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
  });
  return ItemTag;
};