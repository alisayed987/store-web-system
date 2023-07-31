const express = require('express');
const router = express.Router();

module.exports = (sequelize) => {
  const OrderType = sequelize.models.OrderType;

  router.get('/', async (req, res) => {
    const orderTypes = await OrderType.findAll();
    res.send(orderTypes);
  });

  router.get('/:id', async (req, res) => {
    const orderType = await OrderType.findByPk(req.params.id);
    res.send(orderType);
  });

  router.post('/', async (req, res) => {
    try {
      const orderType = await OrderType.create(req.body)
      orderType.save();
      res.status(201).send(orderType);
    } catch (error) {
      res.status(400).send(error.message)
    }
  });

  router.put('/:id', async (req, res) => {
    try {
      const orderType = await OrderType.update(
        req.body,
        {
          where: {
            id: req.params.id
          }
        });
      res.status(202).send(orderType);
    } catch (error) {
      res.status(400).send(error.message)
    }
  });

  router.delete('/:id', async (req, res) => {
    try {
      const orderType = await OrderType.destroy({
        where: {
          id: req.params.id
        }
      });
      res.status(202).send(orderType);
    } catch (error) {
      res.status(400).send(error.message)
    }
  });

  return router;
}
