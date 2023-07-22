'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('items', [{
      name: 'bed0',
      category_id: 1,
      room_id: 1,
      description: "test description",
      dimentions: JSON.stringify({
        width: 160,
        height: 50,
        length:200,
        unit: "cm"
      }),
      available_colors: JSON.stringify({
        wooden_body: [
          "gray",
          "black",
          "white"
        ],
        back_fabric: [
          "blue",
          "pink"
        ]
      }),
      price: 10000,
      discount: 0,
      createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
      updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
    }, {
      name: 'wardrobe',
      category_id: 1,
      room_id: 1,
      description: "test description",
      dimentions: JSON.stringify({
        width: 160,
        height: 220,
        depth: 60,
        unit: "cm"
      }),
      available_colors: JSON.stringify({
        wooden_body: [
          "gray",
          "red",
          "yellow"
        ]
      }),
      price: 14000,
      discount: 0,
      createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
      updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
    },{
      name: 'commod',
      category_id: 1,
      room_id: 1,
      description: "test description",
      dimentions: JSON.stringify({
        width: 50,
        height: 50,
        depth: 60,
        unit: "cm"
      }),
      available_colors: JSON.stringify({
        wooden_body: [
          "gray",
          "red",
          "yellow"
        ]
      }),
      price: 6000,
      discount: 0,
      createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
      updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('items', null, {});
  }
};
