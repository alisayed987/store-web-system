const express = require('express');
const router = express.Router();

module.exports = (sequelize) => {
  const Role = sequelize.models.Role;

  router.get('/', async (req, res) => {
    const roles = await Role.findAll();
    res.send(roles);
  });

  router.get('/:id', async (req, res) => {
    const role = await Role.findByPk(req.params.id);
    res.send(role);
  });

  router.post('/', async (req, res) => {
    try {
      const role = await Role.create(req.body)
      role.save();
      res.status(201).send(role);
    } catch (error) {
      res.status(400).send(error.message)
    }
  });

  router.put('/:id', async (req, res) => {
    try {
      const role = await Role.update(
        req.body,
        {
          where: {
            id: req.params.id
          }
        });
      res.status(202).send(role);
    } catch (error) {
      res.status(400).send(error.message)
    }
  });

  router.delete('/:id', async (req, res) => {
    try {
      const role = await Role.destroy({
        where: {
          id: req.params.id
        }
      });
      res.status(202).send(role);
    } catch (error) {
      res.status(400).send(error.message)
    }
  });

  return router;
}
