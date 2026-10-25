import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import { date } from "zod";


const Order = sequelize.define('Order',{

    id:{
        type:DataTypes.BIGINT,
        primaryKey:true,
        autoIncrement:true
    },

    userId: {
        type: DataTypes.BIGINT,
        allowNull:false,
        field:'user_id'
    },

    totalAmount :{
        type: DataTypes.DECIMAL(12,2),
        allowNull:false,
        defaultValue:0,
        validate:{
            min:0
        },
        field: 'total_amount'
    },

    totalItems : {
        type : DataTypes.INTEGER,
        allowNull:false,
        defaultValue:0,
        validate:{
            min:0
        },
        field:'total_items'
    },
    status:{
        type : DataTypes.ENUM('pending','processing','confirmed','shipped','delievered','cancelled'),
        allowNull:false,
        defaultValue:'pending'
    }

},{
    tableName:'orders',
    timestamps:true,
    underscored:true
})


export default Order;