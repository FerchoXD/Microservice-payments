import { DataTypes, Model } from "sequelize";
import sequelize from "../../../../Database/Config/MySQL/Database";

export class PaymentModel extends Model {
    uuid!:string;
    paymentState!:string;
    paymentDate!:Date;

    paymentMethodUUID!:string;
    transactionUUID!:string;
}

PaymentModel.init({
    uuid: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    paymentState: { type: DataTypes.STRING, allowNull: false },
    paymentDate: { type: DataTypes.DATE, allowNull: false },
}, { modelName: 'payment', timestamps: false, sequelize });