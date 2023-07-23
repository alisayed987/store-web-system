const RoomModel = require('../database/models/Room');
const { DataTypes } = require("sequelize");
const express = require('express');
const router = express.Router();

module.exports = (sequelize) => {
  const Room = RoomModel(sequelize, DataTypes);

  router.get('/', async (req, res) => {
    const rooms = await Room.findAll();
    res.send(rooms);
  });

  router.get('/:id', async (req, res) => {
    const room = await Room.findByPk(req.params.id);
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
        console.log(req.params.id, req.body, room);
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
