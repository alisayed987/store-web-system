const express = require('express');
const categories = require('./categories');
const items = require('./items');
const orders = require('./orders');
const rooms = require('./rooms');
const customers = require('./customers');
const orderTypes = require('./order-types');
const permissions = require('./permissions');
const rolePermissions = require('./role-permissions');
const roles = require('./roles');
const tags = require('./tags');
const users = require('./users');

module.exports = function (app, sequelize) {
    app.use(express.json());
    app.use(
        express.urlencoded({
            extended: true,
        })
    );
    app.use('/api/categories', categories(sequelize));
    app.use('/api/customers', customers(sequelize));
    app.use('/api/items', items(sequelize));
    app.use('/api/rooms', rooms(sequelize));
    app.use('/api/order-types', orderTypes(sequelize));
    app.use('/api/orders', orders(sequelize));
    app.use('/api/permissions', permissions(sequelize));
    app.use('/api/role-permissions', rolePermissions(sequelize));
    app.use('/api/roles', roles(sequelize));
    app.use('/api/tags', tags(sequelize));
    app.use('/api/users', users(sequelize));
}