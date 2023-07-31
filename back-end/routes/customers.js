const express = require('express');
const router = express.Router();

module.exports = (sequelize) => {
  const Customer = sequelize.models.Customer;

  router.get('/', async (req, res) => {
    const customers = await Customer.findAll();
    res.send(customers);
  });

  router.get('/:id', async (req, res) => {
    const customer = await Customer.findByPk(req.params.id);
    res.send(customer);
  });

  router.post('/', async (req, res) => {
    try {
      const customer = await Customer.create(req.body)
      customer.save();
      res.status(201).send(customer);
    } catch (error) {
      res.status(400).send(error.message)
    }
  });

  router.put('/:id', async (req, res) => {
    try {
      const customer = await Customer.update(
        req.body,
        {
          where: {
            id: req.params.id
          }
        });
      res.status(202).send(customer);
    } catch (error) {
      res.status(400).send(error.message)
    }
  });

  router.delete('/:id', async (req, res) => {
    try {
      const customer = await Customer.destroy({
        where: {
          id: req.params.id
        }
      });
      res.status(202).send(customer);
    } catch (error) {
      res.status(400).send(error.message)
    }
  });

  return router;
}
