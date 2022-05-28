import { sequelize } from "../database";
import { DataTypes, Model } from "sequelize";

interface RestaurantInstance extends Model {
    id: number
    name: string
    description: string
    phone: string
    address: string
}



export const Restaurant = sequelize.define<RestaurantInstance>(
    'restaurants',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: DataTypes.STRING,
        phone: DataTypes.STRING,
        address: DataTypes.STRING
    })