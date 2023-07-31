'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class RoomItem extends Model {
        static associate(models) {
            this.belongsTo(models.Room)
            this.belongsTo(models.Item)
        }
    }
    RoomItem.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        room_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "rooms",
                key: "id"
            }
        },
        item_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "items",
                key: "id"
            }
        }
    }, {
        sequelize,
        modelName: 'RoomItem',
        tableName: 'room_items',
        underscored: true
});
    return RoomItem;
};