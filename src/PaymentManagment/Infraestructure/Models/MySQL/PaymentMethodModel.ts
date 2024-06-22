import { DataTypes, Model } from "sequelize";
import sequelize from "../../../../Database/Config/MySQL/Database";

export class PaymentMethodModel extends Model {
    uuid!:string;
    type!:string;
    userDetails!:string;
    information!:string;
}

PaymentMethodModel.init({
    uuid: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    type: { type: DataTypes.STRING, allowNull: false },
    userDetails: { type: DataTypes.STRING, allowNull: false },
    information: { type: DataTypes.STRING, allowNull: false }
}, { modelName: 'payment_method', timestamps: false, sequelize })