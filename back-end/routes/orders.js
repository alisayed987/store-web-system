const express = require('express');
const auth = require('../middlewares/auth');
const router = express.Router();

module.exports = (sequelize) => {

  const Order = sequelize.models.Order;
  router.get('/', auth, async (req, res) => {
    const orders = await Order.findAll({
      include: [
        { model: sequelize.models.Customer },
        { model: sequelize.models.OrderType },
        { model: sequelize.models.Item },
        { model: sequelize.models.Room }
      ]
    });
    res.send(orders);
  });

  router.get('/:id', auth, async (req, res) => {
    const order = await Order.findByPk(req.params.id, {
      include: [
        { model: sequelize.models.Customer },
        { model: sequelize.models.OrderType }
      ]
    });
    res.send(order);
  });

  router.post('/', auth, async (req, res) => {
    try {
      const order = await Order.create(req.body)
      order.save();
      res.status(201).send(order);
    } catch (error) {
      res.status(400).send(error.message)
    }
  });

  router.put('/:id', auth, async (req, res) => {
    try {
      const order = await Order.update(
        req.body,
        {
          where: {
            id: req.params.id
          }
        });
      res.status(202).send(order);
    } catch (error) {
      res.status(400).send(error.message)
    }
  });

  router.delete('/:id', auth, async (req, res) => {
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
