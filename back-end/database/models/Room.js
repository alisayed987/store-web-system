const Room = (db, type) => {
    return db.define('room', {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: type.INTEGER
        },
        name: {
            type: type.STRING,
            allowNull: false,
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

module.exports = Room;