const express = require('express');
const router = express.Router();

module.exports = (sequelize) => {
  const Room = sequelize.models.Room;

  router.get('/', async (req, res) => {
    const rooms = await Room.findAll({
      include: [
        { model: sequelize.models.Category }
      ]
    });
    res.send(rooms);
  });

  router.get('/:id', async (req, res) => {
    const room = await Room.findByPk(req.params.id, {
      include: [
        { model: sequelize.models.Category }
      ]
    });
    res.send(room);
  });

  router.post('/', async (req, res) => {
    try {
      const room = await Room.create(req.body)
      room.save();
      res.status(201).send(room);
    } catch (error) {
      res.status(400).send(error.message)
    }
  });

  router.put('/:id', async (req, res) => {
    try {
      const room = await Room.update(
        req.body,
        {
          where: {
            id: req.params.id
          }
        });
      res.status(202).send(room);
    } catch (error) {
      res.status(400).send(error.message)
    }
  });

  router.delete('/:id', async (req, res) => {
    try {
      const room = await Room.destroy({
        where: {
          id: req.params.id
        }
      });
      res.status(202).send(room);
    } catch (error) {
      res.status(400).send(error.message)
    }
  });

  return router;
}
