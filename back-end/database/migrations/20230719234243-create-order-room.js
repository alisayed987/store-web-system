'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('order_rooms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      image_url: {
        type: Sequelize.STRING,
        allowNull: true
      },
      order_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "orders",
          key: "id"
        }
      },
      room_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "rooms",
          key: "id"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('order_rooms');
  }
};