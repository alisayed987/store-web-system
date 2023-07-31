const express = require('express');
const router = express.Router();

module.exports = (sequelize) => {
  const Permission = sequelize.models.Permission;

  router.get('/', async (req, res) => {
    const permissions = await Permission.findAll();
    res.send(permissions);
  });

  router.get('/:id', async (req, res) => {
    const permission = await Permission.findByPk(req.params.id);
    res.send(permission);
  });

  router.post('/', async (req, res) => {
    try {
      const permission = await Permission.create(req.body)
      permission.save();
      res.status(201).send(permission);
    } catch (error) {
      res.status(400).send(error.message)
    }
  });

  router.put('/:id', async (req, res) => {
    try {
      const permission = await Permission.update(
        req.body,
        {
          where: {
            id: req.params.id
          }
        });
      res.status(202).send(permission);
    } catch (error) {
      res.status(400).send(error.message)
    }
  });

  router.delete('/:id', async (req, res) => {
    try {
      const permission = await Permission.destroy({
        where: {
          id: req.params.id
        }
      });
      res.status(202).send(permission);
    } catch (error) {
      res.status(400).send(error.message)
    }
  });

  return router;
}
