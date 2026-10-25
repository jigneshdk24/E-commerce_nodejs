import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const OrderItems = sequelize.define(
  "OrderItem",
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
    },

    orderId: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      allowNull: false,
      field: "order_id",
    },

    productId: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      allowNull: false,
      field: "product_id",
    },

    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
      },
    },

    unitPrice: {
      type: DataTypes.DECIMAL(12, 2),
      allowNull: false,
      validate: {
        min: 0,
      },
    },
  },
  {
    tableName: "order_items",
    timestamps: false,
  },
);

export default OrderItems;
