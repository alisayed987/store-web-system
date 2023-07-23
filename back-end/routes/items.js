const ItemModel = require('../database/models/Item');
const { DataTypes } = require("sequelize");
const express = require('express');
const router = express.Router();

module.exports = (sequelize) => {
  const Item = ItemModel(sequelize, DataTypes);

  router.get('/', async (req, res) => {
    const items = await Item.findAll();
    res.send(items);
  });

  router.get('/:id', async (req, res) => {
    const item = await Item.findByPk(req.params.id);
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
        console.log(req.params.id, req.body, item);
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
