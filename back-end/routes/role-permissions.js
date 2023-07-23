const RolePermissionModel = require('../database/models/RolePermission');
const { DataTypes } = require("sequelize");
const express = require('express');
const router = express.Router();

module.exports = (sequelize) => {
  const RolePermission = RolePermissionModel(sequelize, DataTypes);

  router.get('/', async (req, res) => {
    const colePermissions = await RolePermission.findAll();
    res.send(colePermissions);
  });

  router.get('/:id', async (req, res) => {
    const colePermission = await RolePermission.findByPk(req.params.id);
    res.send(colePermission);
  });

  router.post('/', async (req, res) => {
    try {
      const colePermission = await RolePermission.create(req.body)
      colePermission.save();
      res.status(201).send(colePermission);
    } catch (error) {
      res.status(400).send(error.message)
    }
  });

  router.put('/:id', async (req, res) => {
    try {
      const colePermission = await RolePermission.update(
        req.body,
        {
          where: {
            id: req.params.id
          }
        });
        console.log(req.params.id, req.body, colePermission);
      res.status(202).send(colePermission);
    } catch (error) {
      res.status(400).send(error.message)
    }
  });

  router.delete('/:id', async (req, res) => {
    try {
      const colePermission = await RolePermission.destroy({
        where: {
          id: req.params.id
        }
      });
      res.status(202).send(colePermission);
    } catch (error) {
      res.status(400).send(error.message)
    }
  });

  return router;
}
