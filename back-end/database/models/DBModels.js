// // import schemas
// const { DataTypes } = require("sequelize");
// const sequelize = require("../db.js")
// const categoryModel = require("./Category.js");
// const customerModel = require("./Customer.js");
// const itemModel = require("./Item.js");
// const itemTagModel = require("./ItemTag.js");
// const orderModel = require("./Order.js");
// const orderItemModel = require("./OrderItem.js");
// const orderRoomModel = require("./OrderRoom.js");
// const orderTypeModel = require("./OrderType.js");
// const permissionModel = require("./Permission.js");
// const roleModel = require("./Role.js");
// const rolePermissionModel = require("./RolePermission.js");
// const roomModel = require("./Room.js");
// const tagModel = require("./Tag.js");
// const userModel = require("./User.js");

// const Category = categoryModel(sequelize, DataTypes);
// const Customer = customerModel(sequelize, DataTypes);
// const Item = itemModel(sequelize, DataTypes);
// const ItemTag = itemTagModel(sequelize, DataTypes);
// const Order = orderModel(sequelize, DataTypes);
// const OrderItem = orderItemModel(sequelize, DataTypes);
// const OrderRoom = orderRoomModel(sequelize, DataTypes);
// const OrderType = orderTypeModel(sequelize, DataTypes);
// const Permission = permissionModel(sequelize, DataTypes);
// const Role = roleModel(sequelize, DataTypes);
// const RolePermission = rolePermissionModel(sequelize, DataTypes);
// const Room = roomModel(sequelize, DataTypes);
// const Tag = tagModel(sequelize, DataTypes);
// const User = userModel(sequelize, DataTypes);

// db.sync({ alter: true }).then((res) => {
//     console.log("Tables Synced.");
// }).then(res => {
//     console.log('DB synced successfully: ', res);
// }).catch((err) => {
//     console.log("Failed to sync DB: ", err)
// });

// module.exports = {
//     Category,
//     Customer,
//     Item,
//     ItemTag,
//     Order,
//     OrderItem,
//     OrderRoom,
//     OrderType,
//     Permission,
//     Role,
//     RolePermission,
//     Room,
//     Tag,
//     User
// }