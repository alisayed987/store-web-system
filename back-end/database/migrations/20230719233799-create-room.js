'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('rooms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      image_url: {
        type: Sequelize.STRING,
        allowNull: true
      },
      category_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "categories",
          key: "id"
        }
      },
      price: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0,
        min: 0
      },
      discount: {
        type: Sequelize.FLOAT,
        allowNull: true,
        defaultValue: 0,
        min: 0
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('rooms');
  }
};