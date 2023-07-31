const express = require('express');
const router = express.Router();

module.exports = (sequelize) => {
  const Tag = sequelize.models.Tag;

  router.get('/', async (req, res) => {
    const tags = await Tag.findAll();
    res.send(tags);
  });

  router.get('/:id', async (req, res) => {
    const tag = await Tag.findByPk(req.params.id);
    res.send(tag);
  });

  router.post('/', async (req, res) => {
    try {
      const tag = await Tag.create(req.body)
      tag.save();
      res.status(201).send(tag);
    } catch (error) {
      res.status(400).send(error.message)
    }
  });

  router.put('/:id', async (req, res) => {
    try {
      const tag = await Tag.update(
        req.body,
        {
          where: {
            id: req.params.id
          }
        });
      res.status(202).send(tag);
    } catch (error) {
      res.status(400).send(error.message)
    }
  });

  router.delete('/:id', async (req, res) => {
    try {
      const tag = await Tag.destroy({
        where: {
          id: req.params.id
        }
      });
      res.status(202).send(tag);
    } catch (error) {
      res.status(400).send(error.message)
    }
  });

  return router;
}
