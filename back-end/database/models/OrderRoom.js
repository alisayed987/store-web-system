const OrderRoom = (db, type) => {
    return db.define('order_room', { 
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: type.INTEGER
        },
        order_id: {
            type: type.INTEGER,
            references: {
                model: "orders",
                key: "id"
            }
        },
        room_id: {
            type: type.INTEGER,
            references: {
                model: "rooms",
                key: "id"
            }
        }
     });
}
module.exports = OrderRoom;