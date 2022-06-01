import { sequelize } from "../database";
import { DataTypes, Model } from "sequelize";

interface RestaurantCustumerInstance extends Model {
    restaurantId: number
    custumerId: number
    stars: number
    comentes: string
}



export const RestaurantCustumer = sequelize.define<RestaurantCustumerInstance>(
    'restaurants_custumers',
    {
        restaurantId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: false,
            primaryKey: true
        },
        custumerId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: false,
            primaryKey: true
        },
        stars: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        comentes: DataTypes.STRING
    })