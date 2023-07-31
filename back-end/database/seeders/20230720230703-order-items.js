'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('order_items', [{
      order_id: 1,
      item_id: 1,
      room_id: 1,
      new_dimentions: JSON.stringify({
        width: 160,
        height: 50,
        length:200,
        unit: "cm"
      }),
      color: JSON.stringify({
        wooden_body: [
          "black",
        ],
        back_fabric: [
          "pink"
        ]
      }),
      price: 10000,
      discount: 0,
      created_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
      updated_at: new Date().toISOString().slice(0, 19).replace('T', ' ')
    }, {
      order_id: 1,
      item_id: 2,
      room_id: 1,
      new_dimentions: JSON.stringify({
        width: 160,
        height: 220,
        depth: 60,
        unit: "cm"
      }),
      color: JSON.stringify({
        wooden_body:"gray"
      }),
      price: 14000,
      discount: 0,
      created_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
      updated_at: new Date().toISOString().slice(0, 19).replace('T', ' ')
    },{
      order_id: 1,
      item_id: 3,
      room_id: 1,
      new_dimentions: JSON.stringify({
        width: 50,
        height: 50,
        depth: 60,
        unit: "cm"
      }),
      color: JSON.stringify({
        wooden_body:"gray"
      }),
      price: 6000,
      discount: 0,
      created_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
      updated_at: new Date().toISOString().slice(0, 19).replace('T', ' ')
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('order_items', null, {});
  }
};
