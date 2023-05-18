const OrderType = (db, type) => {
    return db.define('order_type', {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: type.INTEGER
        },
        name: {
            type: type.STRING,
            allowNull: false,
        }
    });
}

module.exports = OrderType;