'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.item)
    }
  }
  Category.init({
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
    image_url: {
      type: DataTypes.STRING,
      allowNull: true
    },
    parent_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "categories",
        key: "id"
      }
    }
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};