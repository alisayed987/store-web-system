const Item = (db, type) => {
    return db.define('item', { 
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: type.INTEGER
        },
        name: {
            type: type.STRING,
            allowNull: false
        },
        category_id: {
            type: type.INTEGER,
            references: {
                model: "categories",
                key: "id"
            }
        },
        room_id: {
            type: type.INTEGER,
            references: {
                model: "rooms",
                key: "id"
            }
        },
        description: {
            type: type.STRING,
            allowNull: true
        },
        dimentions: {
            type: type.JSON,
            allowNull: true
        },
        available_colors: {
            type: type.JSON,
            allowNull: true
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
module.exports = Item;