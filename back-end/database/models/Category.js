const Category = (db, type) => {
    return db.define('category', {
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

module.exports = Category;