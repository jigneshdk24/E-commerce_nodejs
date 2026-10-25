
import User from './User.js';
import Category from './Category.js';
import Product from './Product.js';
import Order from './Order.js';
import OrderItem from './OrderItem.js';

const setupAssociations = () => {
  // User ↔ Order
  User.hasMany(Order, {
    foreignKey: 'userId',
    as: 'orders',
  });

  Order.belongsTo(User, {
    foreignKey: 'userId',
    as: 'user',
  });

  // Category ↔ Product
  Category.hasMany(Product, {
    foreignKey: 'categoryId',
    as: 'products',
  });

  Product.belongsTo(Category, {
    foreignKey: 'categoryId',
    as: 'category',
  });

  // Category ↔ Subcategories (self-referencing)
  Category.hasMany(Category, {
    foreignKey: 'parentId',
    as: 'subcategories',
  });

  Category.belongsTo(Category, {
    foreignKey: 'parentId',
    as: 'parent',
  });

  // Order ↔ OrderItem
  Order.hasMany(OrderItem, {
    foreignKey: 'orderId',
    as: 'items',
  });

  OrderItem.belongsTo(Order, {
    foreignKey: 'orderId',
    as: 'order',
  });

  // Product ↔ OrderItem
  Product.hasMany(OrderItem, {
    foreignKey: 'productId',
    as: 'orderItems',
  });

  OrderItem.belongsTo(Product, {
    foreignKey: 'productId',
    as: 'product',
  });
};

export default setupAssociations;
