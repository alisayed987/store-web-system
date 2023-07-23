const OrderModel = require('../database/models/Order');
const { DataTypes } = require("sequelize");
const express = require('express');
const router = express.Router();

module.exports = (sequelize) => {
  const Order = OrderModel(sequelize, DataTypes);

  router.get('/', async (req, res) => {
    const orders = await Order.findAll();
    res.send(orders);
  });

  router.get('/:id', async (req, res) => {
    const order = await Order.findByPk(req.params.id);
    res.send(order);
  });

  router.post('/', async (req, res) => {
    try {
      const order = await Order.create(req.body)
      order.save();
      res.status(201).send(order);
    } catch (error) {
      res.status(400).send(error.message)
    }
  });

  router.put('/:id', async (req, res) => {
    try {
      const order = await Order.update(
        req.body,
        {
          where: {
            id: req.params.id
          }
        });
        console.log(req.params.id, req.body, order);
      res.status(202).send(order);
    } catch (error) {
      res.status(400).send(error.message)
    }
  });

  router.delete('/:id', async (req, res) => {
    try {
      const order = await Order.destroy({
        where: {
          id: req.params.id
        }
      });
      res.status(202).send(order);
    } catch (error) {
      res.status(400).send(error.message)
    }
  });

  return router;
}
