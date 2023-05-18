const ItemTag = (db, type) => {
    return db.define('item_tag', { 
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: type.INTEGER
        },
        item_id: {
            type: type.INTEGER,
            references: {
                model: "items",
                key: "id"
            }
        },
        tag_id: {
            type: type.INTEGER,
            references: {
                model: "tags",
                key: "id"
            }
        }
     });
}
module.exports = ItemTag;