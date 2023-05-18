const Permission = (db, type) => {
    return db.define('permission', {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: type.INTEGER
        },
        name: {
            type: type.STRING,
            allowNull: false,
        },
        discription: {
            type: type.STRING,
            allowNull: true,
        }
    });
}

module.exports = Permission;