'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('permissions', [{
      name: 'Edit Data',
      discription: "Can edit categories, rooms, tags, order types and items in database",
      createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
      updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
    },{
      name: 'View Data',
      discription: "Can view categories, rooms, tags, order types and items in database",
      createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
      updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
    },{
      name: 'View Customers',
      discription: "Can view customer personal data to be revised",
      createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
      updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
    },{
      name: 'Edit Customers',
      discription: "Can edit and correct customer personal data to solve customer issue",
      createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
      updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
    },{
      name: 'View Orders',
      discription: "Can view orders with its related data",
      createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
      updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
    },{
      name: 'Edit Orders',
      discription: "Can edit orders content",
      createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
      updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
    },{
      name: 'Make Orders For Others',
      discription: "Can create orders for others",
      createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
      updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
    },{
      name: 'Make Orders For Self',
      discription: "Can create orders for the same customer",
      createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
      updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
    }], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('permissions', null, {});
  }
};
