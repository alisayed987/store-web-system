const UserModel = require('../database/models/User');
const { DataTypes } = require("sequelize");
const express = require('express');
const router = express.Router();

module.exports = (sequelize) => {
  const User = UserModel(sequelize, DataTypes);

  router.get('/', async (req, res) => {
    const users = await User.findAll();
    res.send(users);
  });

  router.get('/:id', async (req, res) => {
    const user = await User.findByPk(req.params.id);
    res.send(user);
  });

  router.post('/', async (req, res) => {
    try {
      const user = await User.create(req.body)
      user.save();
      res.status(201).send(user);
    } catch (error) {
      res.status(400).send(error.message)
    }
  });

  router.put('/:id', async (req, res) => {
    try {
      const user = await User.update(
        req.body,
        {
          where: {
            id: req.params.id
          }
        });
        console.log(req.params.id, req.body, user);
      res.status(202).send(user);
    } catch (error) {
      res.status(400).send(error.message)
    }
  });

  router.delete('/:id', async (req, res) => {
    try {
      const user = await User.destroy({
        where: {
          id: req.params.id
        }
      });
      res.status(202).send(user);
    } catch (error) {
      res.status(400).send(error.message)
    }
  });

  return router;
}
