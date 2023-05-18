const User = (db, type) => {
    return db.define('user', { 
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: type.INTEGER
        },
        name: {
            type: type.STRING,
            allowNull: false,
        },
        email: {
            type: type.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
              }
        },
        password: {
            type: type.STRING(64),
            allowNull: false,
        },
        role_id: {
            type: type.INTEGER,
            allowNull: true,
            references: {
                model: "roles",
                key: "id"
            }
        }
     });
}
module.exports = User;