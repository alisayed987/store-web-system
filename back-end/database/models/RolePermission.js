const RolePermission = (db, type) => {
    return db.define('role_permission', {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: type.INTEGER
        },
        role_id: {
            type: type.INTEGER,
            references: {
                model: "roles",
                key: "id"
            }
        },
        permission_id: {
            type: type.INTEGER,
            references: {
                model: "permissions",
                key: "id"
            }
        }
    });
}

module.exports = RolePermission;