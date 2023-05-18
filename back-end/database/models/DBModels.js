// import schemas
const { DataTypes } = require("sequelize");
const db = require("../db.js")
const categoryModel = require("./Category.js");
const customerModel = require("./Customer.js");
const itemModel = require("./Item.js");
const itemTagModel = require("./ItemTag.js");
const orderModel = require("./Order.js");
const orderItemModel = require("./OrderItem.js");
const orderRoomModel = require("./OrderRoom.js");
const orderTypeModel = require("./OrderType.js");
const permissionModel = require("./Permission.js");
const roleModel = require("./Role.js");
const rolePermissionModel = require("./RolePermission.js");
const roomModel = require("./Room.js");
const tagModel = require("./Tag.js");
const userModel = require("./User.js");

const Category = categoryModel(db, DataTypes);
const Customer = customerModel(db, DataTypes);
const Item = itemModel(db, DataTypes);
const ItemTag = itemTagModel(db, DataTypes);
const Order = orderModel(db, DataTypes);
const OrderItem = orderItemModel(db, DataTypes);
const OrderRoom = orderRoomModel(db, DataTypes);
const OrderType = orderTypeModel(db, DataTypes);
const Permission = permissionModel(db, DataTypes);
const Role = roleModel(db, DataTypes);
const RolePermission = rolePermissionModel(db, DataTypes);
const Room = roomModel(db, DataTypes);
const Tag = tagModel(db, DataTypes);
const User = userModel(db, DataTypes);

db.sync({ alter: true }).then((res) => {
    console.log("Tables Synced.");
}).then(res => {
    console.log('DB synced successfully: ', res);
}).catch((err) => {
    console.log("Failed to sync DB: ", err)
});

module.exports = {
    Category,
    Customer,
    Item,
    ItemTag,
    Order,
    OrderItem,
    OrderRoom,
    OrderType,
    Permission,
    Role,
    RolePermission,
    Room,
    Tag,
    User
}