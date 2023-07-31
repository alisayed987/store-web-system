'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('room_items', [{
            room_id: 1,
            item_id: 1,
            created_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
            updated_at: new Date().toISOString().slice(0, 19).replace('T', ' ')
        }, {
            room_id: 1,
            item_id: 2,
            created_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
            updated_at: new Date().toISOString().slice(0, 19).replace('T', ' ')
        }, {
            room_id: 1,
            item_id: 3,
            created_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
            updated_at: new Date().toISOString().slice(0, 19).replace('T', ' ')
        }], {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('user_roles', null, {});
    }
};
