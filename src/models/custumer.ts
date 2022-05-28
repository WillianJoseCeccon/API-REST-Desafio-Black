import { sequelize } from "../database";
import { DataTypes, Model } from "sequelize";

interface CustumerInstance extends Model {
    id: number
    name: string    
    phone: string
}

export const Custumer = sequelize.define<CustumerInstance>(
    'custumers',
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
          phone: DataTypes.STRING
    }
)