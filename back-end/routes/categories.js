const CategoryModel = require('../database/models/Category');
const { DataTypes } = require("sequelize");
const express = require('express');
const router = express.Router();

module.exports = (sequelize) => {
  const Category = CategoryModel(sequelize, DataTypes);

  router.get('/', async (req, res) => {
    const categories = await Category.findAll();
    res.send(categories);
  });

  router.get('/:id', async (req, res) => {
    const category = await Category.findByPk(req.params.id);
    res.send(category);
  });

  router.post('/', async (req, res) => {
    try {
      const category = await Category.create(req.body)
      category.save();
      res.status(201).send(category);
    } catch (error) {
      res.status(400).send(error.message)
    }
  });

  router.put('/:id', async (req, res) => {
    try {
      const category = await Category.update(
        req.body,
        {
          where: {
            id: req.params.id
          }
        });
        console.log(req.params.id, req.body, category);
      res.status(202).send(category);
    } catch (error) {
      res.status(400).send(error.message)
    }
  });

  router.delete('/:id', async (req, res) => {
    try {
      const category = await Category.destroy({
        where: {
          id: req.params.id
        }
      });
      res.status(202).send(category);
    } catch (error) {
      res.status(400).send(error.message)
    }
  });

  return router;
}
