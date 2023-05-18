const Customer = (db, type) => {
    return db.define('customer', { 
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
        }
     });
}
module.exports = Customer;