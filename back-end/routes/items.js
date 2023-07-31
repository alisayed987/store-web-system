const express = require('express');
const router = express.Router();

module.exports = (sequelize) => {
  const Item = sequelize.models.Item;

  router.get('/', async (req, res) => {
    const items = await Item.findAll({
      include: [
        { model: sequelize.models.Category},
        { model: sequelize.models.Room},
        { model: sequelize.models.Tag}
      ]
    });
    res.send(items);
  });

  router.get('/:id', async (req, res) => {
    const item = await Item.findByPk(req.params.id, {
      include: [
        { model: sequelize.models.Category },
        { model: sequelize.models.Room }
      ]
    });
    res.send(item);
  });

  router.post('/', async (req, res) => {
    try {
      const item = await Item.create(req.body)
      item.save();
      res.status(201).send(item);
    } catch (error) {
      res.status(400).send(error.message)
    }
  });

  router.put('/:id', async (req, res) => {
    try {
      const item = await Item.update(
        req.body,
        {
          where: {
            id: req.params.id
          }
        });
      res.status(202).send(item);
    } catch (error) {
      res.status(400).send(error.message)
    }
  });

  router.delete('/:id', async (req, res) => {
    try {
      const item = await Item.destroy({
        where: {
          id: req.params.id
        }
      });
      res.status(202).send(item);
    } catch (error) {
      res.status(400).send(error.message)
    }
  });

  return router;
}
