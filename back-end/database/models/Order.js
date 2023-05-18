const Order = (db, type) => {
    return db.define('order', { 
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: type.INTEGER
        },
        type_id: {
            type: type.INTEGER,
            references: {
                model: "order_types",
                key: "id"
            }
        },
        customer_id: {
            type: type.INTEGER,
            references: {
                model: "customers",
                key: "id"
            }
        },
        total_price: {
            type: type.DOUBLE,
            allowNull: false
        },
        total_discount: {
            type: type.FLOAT,
            allowNull: true,
            defaultValue: 0,
            min: 0
        },
        delivery: {
            type: type.FLOAT,
            allowNull: false,
            min: 0
        }
     });
}
module.exports = Order;