import { sequelize } from "../database";
import { BelongsToManyAddAssociationMixin, DataTypes, Model } from "sequelize";
import { CustumerInstance } from "./custumer";

interface RestaurantInstance extends Model {
    id: number
    name: string
    description: string
    phone: string
    address: string
    addReview: BelongsToManyAddAssociationMixin<CustumerInstance, number>
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