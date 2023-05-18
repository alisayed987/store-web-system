const OrderItem = (db, type) => {
    return db.define('order_item', { 
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: type.INTEGER
        },
        order_id: {
            type: type.INTEGER,
            allowNull: false,
            references: {
                model: "orders",
                key: "id"
            }
        },
        item_id: {
            type: type.INTEGER,
            allowNull: false,
            references: {
                model: "items",
                key: "id"
            }
        },
        room_id: {
            type: type.INTEGER,
            allowNull: true,
            references: {
                model: "rooms",
                key: "id"
            }
        },
        new_dimentions: {
            type: type.JSON,
            allowNull: true
        },
        color: {
            type: type.JSON,
            allowNull: false
        },
        price: {
            type: type.FLOAT,
            allowNull: false,
            defaultValue: 0,
            min: 0
        },
        discount: {
            type: type.FLOAT,
            allowNull: true,
            defaultValue: 0,
            min: 0
        }
     });
}
module.exports = OrderItem;