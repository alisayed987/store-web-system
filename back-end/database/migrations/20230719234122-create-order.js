'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      order_type_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "order_types",
          key: "id"
        }
      },
      customer_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "customers",
          key: "id"
        }
      },
      total_price: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      total_discount: {
        type: Sequelize.FLOAT,
        allowNull: true,
        defaultValue: 0,
        min: 0
      },
      delivery: {
        type: Sequelize.FLOAT,
        allowNull: false,
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
    await queryInterface.dropTable('orders');
  }
};