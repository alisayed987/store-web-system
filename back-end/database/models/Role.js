const Role = (db, type) => {
    return db.define('role', {
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

module.exports = Role;