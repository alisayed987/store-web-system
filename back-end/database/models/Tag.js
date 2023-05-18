const Tag = (db, type) => {
    return db.define('tag', {
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

module.exports = Tag;